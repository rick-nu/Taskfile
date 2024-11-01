import rubiFont from './ascii/rubi.txt';
import shadowFont from './ascii/shadow.txt';
import usaFont from './ascii/usa.txt';

const buildHeaderFunction = (title: string, fontName: Font = 'Shadow'): string => {
	const headerLines = buildHeader(title, fontName);

	return `function banner {
	echo -e "\${BLUE}\\n"\\${headerLines.map((line, index) => `
	"${line}${index === headerLines.length - 1 ? '${RESET}"' : '\\n"\\'}`).join('')}
}`;
}

export const buildHeader = (title: string, fontName: Font = 'Shadow'): string[] => {
	const characters = String(title).toLowerCase().split('');
	const lines: string[] = [];
	const font = fonts.find((font) => font.name === fontName);

	if (!font) {
		return [];
	}

	const fontArt = String(font.characters).split("\n");
	for (let _ = 0; _ < font.height; _++) {
		lines.push('');
	}

	for (const character of characters) {
		if (character === ' ') {
			for (let index = 0; index < font.height; index++) {
				lines[index] += '   ';
			}
		}

		const characterIndex = fontCharacters.indexOf(character);

		if (characterIndex < 0) {
			continue;
		}

		const start = characterIndex * font.height;
		const fontArtCharacter = fontArt.slice(start, start + font.height);
		const characterWidth = Math.max(...fontArtCharacter.map((artLine) => artLine.length));

		for (let index = 0; index < font.height; index++) {
			lines[index] += fontArtCharacter[index].padEnd(characterWidth, ' ');
		}
	}

	return lines;
}

export type Font = 'Rubi' | 'Shadow';

type ASCII = {
	name: string,
	height: number;
	characters: string;
}

const fontCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789?!-._';
const fonts: ASCII[] = [
	{
		name: 'Rubi',
		height: 4,
		characters: rubiFont,
	},
	{
		name: 'Shadow',
		height: 6,
		characters: shadowFont,
	},
	{
		name: 'USA',
		height: 5,
		characters: usaFont,
	}
]

export default buildHeaderFunction;
