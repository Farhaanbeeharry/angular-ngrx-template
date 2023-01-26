
import { createAction, props } from "@ngrx/store";

export const SayHello = createAction(
    '[app] Say Hello', props<{ name: string }>()
);

