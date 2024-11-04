/*
 * @Author: wangqz
 * @Date: 2024-10-15
 * @LastEditTime: 2024-10-17
 * @Description: content
 */
import { MD5, enc, lib, AES, mode, pad } from 'crypto-js';

/**
 * @returns 加密后的hex字符串
 */
export function encryptPassword(params: { origPass: string; newPass: string; userAccount: string }): string {
  const md5K = MD5(`${params.origPass}_${params.userAccount}`).toString(enc.Hex).toUpperCase();
  const key = enc.Hex.parse(md5K); //十六位十六进制数作为密钥
  const iv = lib.WordArray.create(new Uint8Array(16).fill(0), 16); //十六位十六进制数作为密钥偏移量
  let srcs = enc.Utf8.parse(params.newPass);
  let encrypted = AES.encrypt(srcs, key, { iv: iv, mode: mode.CBC, padding: pad.Pkcs7 });
  return encrypted.ciphertext.toString();
}
