# TYST

**Ephemeral encrypted messaging. No identity. No logs. No trace.**

tyst.site | jd34xoogv4b2qawdrxj665zhzvrvf3t2echid5zb4wksas3qsgf3void.onion

## What it does

Send end-to-end encrypted notes to a username. Self-destructs 5 seconds after reading. No plaintext ever touches the server.

## Cryptographic design

- Key exchange: ECDH P-256 (ephemeral keypair per message)
- Encryption: AES-GCM 256-bit (random 12-byte IV)
- Key derivation: HKDF-SHA256 (info: whisper-v2)
- Padding: 256-byte block boundary · random noise fill · 0xff sentinel
- Private key: localStorage, device-only, never transmitted


## Access model

| Tier | Price | Send | Receive | Notes |
|---|---|---|---|---|
| Free (Trial) | Free | Unlimited | Unlimited | First 21 days |
| Free (Post-trial) | Free | No | Yes, forever | Retain without paying |
| Tier 1 Secure Channel | $3/yr | Unlimited | Yes | Full access |
| Tier 2 Vault Armour | $30/yr | Unlimited | Yes | + passphrase (coming) |

Free tier is permanently receive-only after 21-day trial. Paid users can reach free users forever — this is by design. Free receivers become the distribution network for paid senders.

Payment via BCA (Indonesia) or USDT TRC-20. Manual confirmation. No payment processor. No identity required.

To upgrade: send payment proof to tyst.pay via TYST, admin upgrades your tier directly.

## Security audit

Community security review completed 2026-05-23. Areas reviewed: injection, mass assignment, collection rules, CORS, CSP, timing attack, race condition, credentials, padding, key fingerprint, username enumeration, ownership checks, rate limiting.

Formal third-party audit (Cure53 / Trail of Bits) planned. Do not use for high-stakes communications until complete.

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

## Security

Responsible disclosure: send findings to tyst.pay via TYST. We review all reports. No formal bounty program yet — formal audit planned.

## Roadmap

**Phase 1 — Current**
- E2E encryption, ephemeral messages, self-destruct
- Tor hidden service
- 21-day trial, free receive forever
- Manual payment via BCA / USDT TRC-20
- Warrant canary + threat model

**Phase 2 — Next**
- PGP-signed canary (pending contact channel)
- Tier 2 Vault Armour passphrase (4-6 words, multilingual)
- Monero + BTCPay self-hosted payment
- Formal security audit (Trail of Bits / Cure53)
- Bug bounty program

**Phase 3 — Future**
- Post-quantum hybrid cryptography (ECDH + Kyber)
- Decentralized relay (trust minimization)
- Multi-recipient 1-to-1 broadcast
- iOS / Android native PWA improvements

## Security

Responsible disclosure: send findings to tyst.pay via TYST. We review all reports. No formal bounty program yet — formal audit planned once resources allow.
