import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import { getItem } from '../lib/local-storage'
import { EHttpMethod } from '@/config/enums'
import { IParams } from '@/config/services'

class HttpService {
  private http: AxiosInstance
  private baseURL = process.env.NEXT_PUBLIC_API_URL

  constructor() {
    this.http = axios.create({
      baseURL: this.baseURL,
      withCredentials: false,
      headers: this.setupHeaders(),
    })
    this.injectInterceptors()
  }

  // Get authorization token for requests
  private get getAuthorization() {
    const accessToken = getItem('token')
    return accessToken ? { Authorization: accessToken } : {}
  }

  // Set up request headers for is any moment need different
  private setupHeaders(hasAttachment = false) {
    return hasAttachment
      ? {
          'Content-Type': 'multipart/form-data',
          ...this.getAuthorization,
        }
      : { 'Content-Type': 'application/json', ...this.getAuthorization }
  }

  // Handle HTTP requests
  private async request<T>(
    method: EHttpMethod,
    url: string,
    options: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.http.request<T>({
        method,
        url,
        ...options,
      })

      return response.data
    } catch (error) {
      return this.normalizeError(error)
    }
  }

  // Perform GET request
  public async get<T>(
    url: string,
    params?: IParams,
    hasAttachment = false
  ): Promise<T> {
    return this.request<T>(EHttpMethod.GET, url, {
      params,
      headers: this.setupHeaders(hasAttachment),
    })
  }

  // Perform POST request
  public async post<T, P>(
    url: string,
    payload: P,
    params?: IParams,
    hasAttachment = false
  ): Promise<T> {
    return this.request<T>(EHttpMethod.POST, url, {
      params,
      data: payload,
      headers: this.setupHeaders(hasAttachment),
    })
  }

  // Perform UPDATE request
  public async update<T, P>(
    url: string,
    payload: P,
    params?: IParams,
    hasAttachment = false
  ): Promise<T> {
    return this.request<T>(EHttpMethod.PUT, url, {
      params,
      data: payload,
      headers: this.setupHeaders(hasAttachment),
    })
  }

  // Perform DELETE request
  public async delete<T>(
    url: string,
    params?: IParams,
    hasAttachment = false
  ): Promise<T> {
    return this.request<T>(EHttpMethod.DELETE, url, {
      params,
      headers: this.setupHeaders(hasAttachment),
    })
  }

  // Inject interceptors for request and response
  private injectInterceptors() {
    // Set up request interceptor
    this.http.interceptors.request.use((request) => {
      // * Perform an action
      return request
    })

    // Set up response interceptor
    this.http.interceptors.response.use(
      (response) => response,
      (error) => {
        const status = error.response ? error.response.status : null
        console.log(`Error Status Code: ${status}`)

        return Promise.reject(error)
      }
    )
  }

  // Normalize errors
  private normalizeError(error: any) {
    return Promise.reject(error)
  }
}

export const apiInstance = new HttpService()
