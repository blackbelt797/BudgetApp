






const publicTokenRequest: SandboxPublicTokenCreateRequest = {
	institution_id: institutionID,
	initial_products: initialProducts,
      };


      
      try {
	const publicTokenResponse = await client.sandboxPublicTokenCreate(
	  publicTokenRequest,
	);
	const publicToken = publicTokenResponse.data.public_token;
	// The generated public_token can now be exchanged
	// for an access_token
	const exchangeRequest: ItemPublicTokenExchangeRequest = {
	  public_token: publicToken,
	};
	const exchangeTokenResponse = await client.itemPublicTokenExchange(
	  exchangeRequest,
	);
	const accessToken = exchangeTokenResponse.data.access_token;
      } catch (error) {
	// handle error
      }