import { useState } from "react";
import "./Encryption.css";
import MessageEncryption from "./EncryptionComponents/MessageEncryption";
var forge = require("node-forge");

function Encryption() {
    return (
        <div className="Encryption">
            <MessageEncryption />
            <div className="symmetric_file encrypt_block">
                <select>
                    <option>AES</option>
                    <option>DES</option>
                    <option>BlowFish</option>
                    <option>AES</option>
                </select>
                <input type="file"/>
                <button>Зашифровать</button>
            </div>
            
        </div>
    )
}

export default Encryption;