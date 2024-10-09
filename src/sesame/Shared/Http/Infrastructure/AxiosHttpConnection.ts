import type { HttpConnection } from '../Domain/HttpConnection'
import { HttpError } from '../Domain/Errors/HttpError'
import axios, { type AxiosInstance, isAxiosError } from 'axios'

export default class AxiosHttpConnection implements HttpConnection {
  private httpInstance: AxiosInstance

  constructor(baseURL: string, authToken: string) {
    this.httpInstance = axios.create({
      baseURL: `${baseURL}`,
      headers: { Authorization: `Bearer ${authToken}` }
    })
  }

  /**
   * Get data
   */
  async get<T>(endpoint: string, query?: Record<string, string>): Promise<T> {
    try {
      endpoint = this.removeSliceEndpoint(endpoint)
      const response = await this.httpInstance.get<T>(endpoint, { data: query })
      return response.data
    } catch (e) {
      this.handleErrors(e)
    }
  }

  /**
   * Post data
   */
  async post<T, B>(endpoint: string, body: B): Promise<T> {
    try {
      endpoint = this.removeSliceEndpoint(endpoint)
      const response = await this.httpInstance.post(endpoint, body)
      return response.data
    } catch (e) {
      this.handleErrors(e)
    }
  }

  /**
   * Put data
   */
  async put<T, B>(endpoint: string, body: B): Promise<T> {
    try {
      endpoint = this.removeSliceEndpoint(endpoint)
      const response = await this.httpInstance.put(endpoint, body)
      return response.data
    } catch (e) {
      this.handleErrors(e)
    }
  }

  async delete<T>(endpoint: string, id: T): Promise<void> {
    throw new Error('Class not implemented')
  }

  private removeSliceEndpoint(endpoint: string): string {
    if (endpoint.startsWith('/')) {
      endpoint = endpoint.slice(1)
    }
    return endpoint
  }

  /** Handle Api errors */
  private handleErrors(e: unknown): never {
    if (isAxiosError(e)) {
      const code = parseInt(e.code ?? '500')
      throw HttpError.createFromCode(!isNaN(code) ? code : 500, e)
    }
    throw e
  }
}
