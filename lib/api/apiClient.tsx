interface optionsType {
  baseUrl?: string;
  headers?: Record<string, string>;
}

// const apiClient = async (url: string, options:optionsType = {}) => {
//     const {baseUrl = "", headers={}, ...rest} = options;
//     const response = await fetch(`${baseUrl}${url}`,{
//         headers:{
//             "Content-Type":"application/json",
//             ...headers,
//         },
//         ...rest,
//     });
// }

export async function apiClient(
  url: String,
  options: optionsType & RequestInit = ({} = {})
) {
  const { baseUrl = "", headers = {}, ...rest } = options;
  
  const response = await fetch(`${baseUrl}${url}`, {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...rest,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API Error: ${response.status} ${errorText}`);
  }

  return response.json();
}
