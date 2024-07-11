// service/nft.service.js
export const NFTService = {
    CreateNFT: async ({ name, symbol, file }) => {
      const obj = {
        network: "devnet",
        private_key: "zL8D95FVpte6gjqFvZnMgTxeBLCjTs6ePQksjqjq9sP",
        name,
        symbol,
        file,
        royalty: 10,
      };
  
      const form_data = new FormData();
      for (let key in obj) {
        console.log(key);
        console.log(obj[key]);
        form_data.append(key, obj[key]);
      }
  
      console.log(obj);
  
      fetch('https://api.shyft.to/sol/v1/nft/create', {
        method: "POST",
        headers: {
          "x-api-key": "XNH-Setct297Dqzw",
        },
        body: form_data,
      });
    },
  };
  