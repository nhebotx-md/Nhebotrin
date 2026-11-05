/** Shared adapter: Youhu HTML mini-games -> Ourin plugin API. */
export async function sendYouhuGame(m, sock, reply, game) {
  const certificateUrl = "https://raw.githubusercontent.com/noxXza/data/refs/heads/main/certificate.json";
  const payloadUrl = `https://raw.githubusercontent.com/noxXza/data/refs/heads/main/${game.file}.html`;

  try {
    const [certificateRes, payloadRes] = await Promise.all([
      fetch(certificateUrl),
      fetch(payloadUrl),
    ]);
    if (!certificateRes.ok) throw new Error(`certificate HTTP ${certificateRes.status}`);
    if (!payloadRes.ok) throw new Error(`payload HTTP ${payloadRes.status}`);

    const certChain = await certificateRes.json();
    const htmlPayload = await payloadRes.text();
    if (!htmlPayload.trim()) throw new Error("payload game kosong");

    const responseData = {
      response_id: "4db57b2c-8393-484d-8b9a-8e6d1a14b349",
      sections: [{
        view_model: {
          primitive: {
            __typename: "GenAIaeacdsnwHtmlPrimitive",
            payload: htmlPayload,
            trusted_sources: game.trustedSources,
          },
          __typename: "GenAISingleLayoutViewModel",
        },
      }],
    };

    const dataBase64 = Buffer.from(JSON.stringify(responseData, null, 2)).toString("base64");
    const messageType = game.messageType ?? "AI_RICH_RESPONSE_TYPE_STANDARD";
    const submessageType = game.submessageType ?? "AI_RICH_RESPONSE_TEXT";
    const contextInfo = {
      ...(game.contextInfo || {}),
      forwardingScore: game.contextInfo?.forwardingScore ?? 1,
      isForwarded: game.contextInfo?.isForwarded ?? true,
      forwardedAiBotMessageInfo: {
        botJid: "867051314767696@bot",
        ...(game.contextInfo?.forwardedAiBotMessageInfo || {}),
      },
      forwardOrigin: game.forwardOrigin ?? "META_AI",
    };

    await sock.relayMessage(m.chat, {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2,
        botMetadata: {
          messageDisclaimerText: "",
          botResponseId: "b2e40280-433c-45d8-9c1a-270bec558860",
          verificationMetadata: {
            proofs: [{
              version: 1,
              useCase: game.useCase,
              signature: "TklYRUwuTWVzc2FnZUJ1aWxkZXJWNC43LVZlcmlmaWNhdGlvblNpZ25hdHVyZS5NZXRhZGF0YeN55YRyad2+ZA==",
              certificateChain: certChain,
            }],
          },
        },
      },
      botForwardedMessage: {
        message: {
          richResponseMessage: {
            messageType,
            submessages: [{ messageType: submessageType, messageText: game.title }],
            unifiedResponse: { data: dataBase64 },
            contextInfo,
          },
        },
      },
    }, {});
  } catch (error) {
    console.error(`[Youhu Game] ${game.name}:`, error);
    await reply(`❌ Gagal memuat *${game.name}*\n> ${error.message}`);
  }
}
