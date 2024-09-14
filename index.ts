import { Client, GatewayIntentBits } from "discord.js";
import events from "./events/index";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

export function init(): void {
    client.login(process.env.DISCORD_TOKEN);
    loadEvents();
}

function loadEvents(): void {
    for (const event of events) {
        client.on(event.name, (...arg) => event.execute(...arg));
    }
}

init();
