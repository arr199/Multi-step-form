import z, { type SafeParseReturnType, string, type SafeParseError } from 'zod'

export type InfoSchema = z.infer<typeof infoSchema>

export const infoSchema = z.object({

  name: string().transform(e => e.replace(/\s+/g, '')).pipe(string().min(1, { message: 'This field is required' })),
  email: string().min(1, { message: 'This field is required' }).email({ message: 'Provide a valid email' }),
  phone: string().min(1, { message: 'This field is required' }).regex(/^\+?\d+$/, { message: 'Provide a valid phone number' })

})

export function validateInfo (object: InfoSchema): SafeParseReturnType<InfoSchema, InfoSchema> | SafeParseError<InfoSchema> {
  return infoSchema.safeParse(object)
}
