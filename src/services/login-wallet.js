export const getRequiredProvider = (walletPropName) => {
  if (window.ethereum) {
    let provider = window.ethereum;
    if (window.ethereum.providers?.length > 1) {
      window.ethereum.providers.forEach((providerIterable) => {
        if (providerIterable[walletPropName]) {
          provider = providerIterable;
        }
      });
      return provider;
    } else if (provider[walletPropName]) {
      return provider;
    }
  }
};

export const getTokenWallet = (provider) =>
  provider.request({
    method: "eth_requestAccounts",
    params: [],
  });
