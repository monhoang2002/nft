// createnft.js
import React, { useState } from 'react';
import { NFTService } from './service/nft.service';

export default function CreateNFT() {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [file, setFile] = useState(null);
  const [createNFT, setCreateNFT] = useState(null);

  const handleCreate = () => {
    const newNFT = { name, symbol, file };
    NFTService.CreateNFT(newNFT);
    setCreateNFT(newNFT);
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.currentTarget.value)} />
      <input value={symbol} onChange={(e) => setSymbol(e.currentTarget.value)} />
      <input type='file' onChange={(e) => setFile(e.currentTarget.files[0])} />
      <button onClick={handleCreate}> Create</button>
      {
        createNFT && (
          <div>
            {createNFT.file && <img height={"200px"} width={"200px"} src={URL.createObjectURL(createNFT.file)} alt='nft card' />}
            <h2>{createNFT.name}</h2>
            <p>{createNFT.symbol}</p>
          </div>
        )
      }
    </div>
  );
}
