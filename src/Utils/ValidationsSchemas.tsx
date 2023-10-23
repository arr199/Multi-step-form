import z, { type SafeParseReturnType, string } from 'zod'

type InfoSchema = z.infer<typeof infoSchema>

export const infoSchema = z.object({
  name: string().min(1),
  email: string().min(1).email(),
  phone: string().min(1)
})

export function validateInfo (object: InfoSchema): SafeParseReturnType<InfoSchema, InfoSchema> {
  return infoSchema.safeParse(object)
}
