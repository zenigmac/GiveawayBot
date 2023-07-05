import * as commands from './commands.js'

export async function register (env) {
  // Guild Application Commands
  for (const command in commands) {
    fetch(`https://discord.com/api/v10/applications/${env.DISCORD_APPLICATION_ID}/guilds/${env.DISCORD_TEST_GUILD_ID}`, {
      method: 'POST',
      headers: new Headers()
        .append('Authorization', `Authoriation: Bot ${env.DISCORD_TOKEN}`),
      body: command
    }).finally(async (res) => {
      return await res
    })
  }
}
