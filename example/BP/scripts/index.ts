import { world } from "@minecraft/server";
import chroma from "chroma";

// Displays "§c§lThis message is important!§r"
world.sendMessage(chroma.red.bold("This message is important!"));

// Displays "§aMix §oit§r up!"
world.sendMessage(chroma.green + `Mix ${chroma.italic("it")} up`);

// Displays "§5§oVery §lvery §bnestable§r"
world.sendMessage(
  chroma.blue.italic("Very " + chroma.bold("very " + chroma.aqua("nestable")))
);
