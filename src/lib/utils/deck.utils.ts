export function getPrintConfig(decks: { cards: unknown[]; id: string; name: string }[]) {
	//Format
	//10;7;69;True;Test_deck;https://i.imgur.com/q6J6Qif.png;https://i.imgur.com/q6J6Qif.png
	return decks
		.map((deck) => {
			const amountOfCards = deck.cards.length;
			const frontImageName = `PD-${deck.id}-front.png`;
			const backImageName = `PD-${deck.id}-back.png`;
			return `4;${Math.ceil(amountOfCards / 4)};${amountOfCards};True;${deck.name};${frontImageName};${backImageName};`;
		})
		.join('\r\n');
}
