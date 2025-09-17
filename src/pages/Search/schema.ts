import z from 'zod'
import { HeroAlignment } from '../../types/hero'

export const schema = z.object({
  name: z.string().max(50).optional(),
  hero: z.string().max(50).optional(),
  alignment: z.enum(HeroAlignment).optional(),
})
