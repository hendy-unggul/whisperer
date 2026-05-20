# TYST

**Ephemeral encrypted messaging. No identity. No logs. No trace.**

→ [tyst.site](https://tyst.site) · [.onion](http://jd34xoogv4b2qawdrxj665zhzvrvf3t2echid5zb4wksas3qsgf3void.onion)

---

## What it does

TYST lets you send end-to-end encrypted notes to a username. The note self-destructs 5 seconds after the recipient reads it. No plaintext ever touches the server.

---

## Cryptographic design

| Primitive | Implementation |
|---|---|
| Key exchange | ECDH P-256 (ephemeral keypair per message) |
| Encryption | AES-GCM 256-bit (random 12-byte IV) |
| Key derivation | HKDF-SHA256 (salt: 32 zero bytes, info: `whisper-v2`) |
| Padding | 256-byte block boundary (payload size does not leak) |
| Private key storage | Web Crypto API, localStorage, device-only |

Encryption runs entirely on the sender's device. The server receives and stores only ciphertext. The recipient's private key — which the server never holds — is required for decryption.

---

## Threat model

**What TYST protects against:**
- Server compromise → attacker gets ciphertext only
- Identity linkage → no phone, no email, no IP log
- Legal compulsion → nothing to produce (ephemeral + Finnish jurisdiction)
- Mass surveillance → E2E, zero logs, no metadata

**What TYST does NOT protect against:**
- Device compromise → private key is in localStorage
- Recipient betrayal → recipient can screenshot before destruction
- Nation-state targeted attack → use Briar + Tor for this threat level

Full threat model: [tyst.site/threat-model.html](https://tyst.site/threat-model.html)

---

## Infrastructure

```
Server      Hetzner Helsinki HEL1 · Finland · EU
Database    PocketBase self-hosted · SQLite
TLS         Caddy · auto-renewed Let's Encrypt
Logs        None · Caddy output discarded
Tor         jd34xoogv4b2qawdrxj665zhzvrvf3t2echid5zb4wksas3qsgf3void.onion
Jurisdiction  Finnish law · EU GDPR · outside 5 Eyes · outside CLOUD Act
```

---

## Asymmetric defense

TYST does not claim to be unbreakable. It claims that breaking it costs more than the information is worth.

```
Mass surveillance   → Impossible
Targeted attack     → Expensive  (blast radius = 1 message)
Legal coercion      → Exhausting (Finland jurisdiction, data gone before process ends)
```

---

## Self-hosting

The server runs Express + PocketBase. No external services required.

```bash
# Dependencies
node >= 18
pocketbase >= 0.22

# Run
pm2 start ecosystem.config.js
```

---

## Warrant canary

Updated monthly: [tyst.site/canary.html](https://tyst.site/canary.html)

---

## License

MIT
