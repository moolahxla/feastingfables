
/**
 * A simple fetch utility for making API requests
 */

interface FetchOptions extends RequestInit {
  params?: Record<string, string>;
}

interface ApiResponse<T> {
  data: T | null;
  error: Error | null;
}

/**
 * Fetch data from an API endpoint
 * @param url The URL to fetch from
 * @param options Fetch options including method, headers, body, etc.
 * @returns Promise with data or error
 */
export async function fetchApi<T>(url: string, options: FetchOptions = {}): Promise<ApiResponse<T>> {
  try {
    // Handle query parameters if provided
    if (options.params) {
      const queryParams = new URLSearchParams(options.params).toString();
      url = `${url}${url.includes('?') ? '&' : '?'}${queryParams}`;
    }

    // Set default headers if not provided
    const headers = options.headers || {
      'Content-Type': 'application/json',
    };

    // Perform the fetch request
    const response = await fetch(url, {
      ...options,
      headers,
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    // Parse the response as JSON
    const data = await response.json();
    
    return { data, error: null };
  } catch (error) {
    console.error('Fetch error:', error);
    return { 
      data: null, 
      error: error instanceof Error ? error : new Error(String(error)) 
    };
  }
}

/**
 * Shorthand for GET requests
 */
export async function get<T>(url: string, options: FetchOptions = {}): Promise<ApiResponse<T>> {
  return fetchApi<T>(url, { ...options, method: 'GET' });
}

/**
 * Shorthand for POST requests
 */
export async function post<T>(url: string, data: any, options: FetchOptions = {}): Promise<ApiResponse<T>> {
  return fetchApi<T>(url, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Shorthand for PUT requests
 */
export async function put<T>(url: string, data: any, options: FetchOptions = {}): Promise<ApiResponse<T>> {
  return fetchApi<T>(url, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

/**
 * Shorthand for DELETE requests
 */
export async function del<T>(url: string, options: FetchOptions = {}): Promise<ApiResponse<T>> {
  return fetchApi<T>(url, { ...options, method: 'DELETE' });
}
