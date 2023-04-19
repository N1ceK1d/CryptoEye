import { useState } from "react";
var forge = require("node-forge");

function MessageEncryption() {
    const [message, setMessage] = useState("")
    const [encryptMesasge, setEncrypt] = useState("");
    const [encryptCipher, setCipher] = useState("");
    const [keySize, setKey] = useState();
    const [ivSize, setIv] = useState();
    const [password, setPassword] = useState("");

    function switchCipher() {
        switch (encryptCipher) {
            case "RC2":
                RC2Encrypt();
                break;
            case "AES":
                AesEncrypt();
                break;
            case "DES":
                AesEncrypt();
                break;
            case "3DES":
                AesEncrypt();
                break;
            default:
                break;
        }
    }

    function RC2Encrypt() {
        var key = forge.random.getBytesSync(keySize);
        var iv = forge.random.getBytesSync(ivSize);
        
        // encrypt some bytes
        var cipher = forge.rc2.createEncryptionCipher(key);
        cipher.start(iv);
        cipher.update(forge.util.createBuffer(message));
        cipher.finish();
        var encrypted = cipher.output.toHex();
        // outputs encrypted hex
        setEncrypt(encrypted);
        
       /* // decrypt some bytes
        var cipher = forge.rc2.createDecryptionCipher(key);
        cipher.start(iv);
        cipher.update(encrypted);
        cipher.finish();
        // outputs decrypted hex
        setEncrypt(forge.util.decodeUtf8(cipher.output.data));*/
    }

    function AesEncrypt() {
        var key = forge.random.getBytesSync(keySize);
        var iv = forge.random.getBytesSync(ivSize);

        var salt = forge.random.getBytesSync(128);
        var key = forge.pkcs5.pbkdf2(password, salt, 16, 16);

        var cipher = forge.cipher.createCipher('AES-CBC', key);
        cipher.start({iv: iv});
        cipher.update(forge.util.createBuffer(forge.util.encodeUtf8(message)));
        cipher.finish();
        var encrypted = cipher.output.toHex();
        setEncrypt(encrypted);

        /*var decipher = forge.cipher.createDecipher('AES-CBC', key);
        decipher.start({iv: iv});
        decipher.update(encrypted);
        var result = decipher.finish(); // check 'result' for true/false
        // outputs decrypted hex
        console.log(decipher.output.data);*/
    }

    return (
        <div className="symmetric_text encrypt_block">
            <div className="encrypt_option">
                <select onChange={(e) => {setCipher(e.target.value)}}>
                    <option defaultChecked="true">Шифр</option>
                    <option>AES-ECB</option>
                    <option>3DES-ECB</option>
                    <option>DES-ECB</option>
                    <option>RC2</option>
                </select>
                <select onChange={(e) => {setKey(e.target.value / 8)}}>
                    <option defaultChecked="true">Размер ключа</option>
                    <option>128</option>
                    <option>192</option>
                    <option>256</option>
                </select>
                <select onChange={(e) => {setIv(e.target.value / 8)}}>
                    <option defaultChecked="true">Вектор инициализации</option>
                    <option>128</option>
                    <option>192</option>
                    <option>256</option>
                </select>
            </div>
            <input type="text" onInput={(e) => {setPassword(e.target.value)}}/>
            <textarea onChange={(e) => {setMessage(e.target.value)}}></textarea>
            <button onClick={switchCipher}>Зашифровать</button>
            <textarea value={encryptMesasge}></textarea>
        </div>
    )
}

export default MessageEncryption;