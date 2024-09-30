
export const publicProcedure = t.procedure;


export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
