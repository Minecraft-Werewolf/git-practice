// @ts-check
import { world } from "@minecraft/server";

world.afterEvents.playerPlaceBlock.subscribe((ev) => {
  const { player, block } = ev;
  console.log(`${player.name} setblock ${block.typeId}`);
});