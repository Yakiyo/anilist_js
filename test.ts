import { assertEquals } from 'https://deno.land/std@0.158.0/testing/asserts.ts';
import Anilist from './mod.ts';

const anilist = new Anilist();

Deno.test('Media Test', async () => {
	const anime = await anilist.media.anime(135806);
	console.log(anime.title.romaji);
	assertEquals(anime.title.romaji, 'Isekai Oji-san');
});

Deno.test('People Test', async () => {
	const character = await anilist.people.character(126373);
	console.log(character.name.english);
	assertEquals(character.name.english, 'Miku Nakano');
});

Deno.test('Lists Test', async () => {
	const list = await anilist.lists.anime('Yakiyo');
	console.log(list[0].entries[0].status);
	assertEquals(list.length > 0, true);
});

Deno.test('Thread Test', async () => {
	const thread = await anilist.thread.get(14); // The Anilist guidelines thread
	console.log(thread.title);
	assertEquals(thread.title, 'AniList Guidelines & Data Submissions');
});
