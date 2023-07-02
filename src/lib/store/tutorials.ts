import type { Tutorial } from '$lib/model/tutorial';
import { derived, writable } from 'svelte/store';
import { searchTerm } from './searchTerm';

export const tutorialsList = writable<Tutorial[]>([]);

export const filteredTutorials = derived(
    [tutorialsList, searchTerm],
    ([$tutorials, $searchTerm]) => {
      if($searchTerm.trim() === "") {
        return $tutorials;
      }
      return $tutorials?.filter(tutorial => tutorial.title.toLowerCase().includes($searchTerm.toLowerCase())) || []
    }
);