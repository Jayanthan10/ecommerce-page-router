export abstract class ServiceBase {
  protected static async handleResponse<T>(
    response: Response
  ): Promise<T> {
    if (!response.ok) {
      throw new Error("API request failed")
    }

    return response.json()
  }
}