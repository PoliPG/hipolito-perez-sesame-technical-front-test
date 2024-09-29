import type { APIMetaListDTO } from './APIMetaListDTO'

export interface APIDTO<T> {
  data: T
  meta: APIMetaListDTO
}
