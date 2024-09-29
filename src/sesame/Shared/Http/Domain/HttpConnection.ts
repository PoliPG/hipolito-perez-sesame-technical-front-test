export interface HttpConnection {
  get<T>(endpoint: string, query?: Record<string, string>): Promise<T>
  post<T, B>(endpoint: string, body: B): Promise<T>
  put<T, B>(endpoint: string, body: B): Promise<T>
  delete<T>(endpoint: string, id: T): Promise<void>
}
