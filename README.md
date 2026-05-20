# TYST

**Ephemeral encrypted messaging. No identity. No logs. No trace.**

tyst.site | jd34xoogv4b2qawdrxj665zhzvrvf3t2echid5zb4wksas3qsgf3void.onion

## What it does

Send end-to-end encrypted notes to a username. Self-destructs 5 seconds after reading. No plaintext ever touches the server.

## Cryptographic design

- Key exchange: ECDH P-256 (ephemeral keypair per message)
- Encryption: AES-GCM 256-bit (random 12-byte IV)
- Key derivation: HKDF-SHA256 (info: whisper-v2)
- Padding: 256-byte block boundary
- Private key: localStorage, device-only, never transmitted

## Asymmetric defense

- Mass surveillance: Impossible
- Targeted attack: Expensive (blast radius = 1 message)
- Legal coercion: Exhausting (Finland jurisdiction, data gone before process ends)

## Infrastructure

- Server: Hetzner Helsinki HEL1, Finland, EU
- Database: PocketBase self-hosted, SQLite
- Logs: None, Caddy output discarded
- Tor: jd34xoogv4b2qawdrxj665zhzvrvf3t2echid5zb4wksas3qsgf3void.onion
- Jurisdiction: Finnish law, EU GDPR, outside 5 Eyes, outside CLOUD Act

## Warrant canary

tyst.site/canary.html - updated monthly

## License

MIT
