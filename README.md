# Outcrowd Mobile UI Kit

A mobile application built with **React Native**, **Expo SDK 58+**, and **Expo Router**, based on the famous Outcrowd Design Kit (`mobile-ui-kit-outcrowd-community.sketch`).

## 🚀 Features & Completed Artboards

Outcrowd Mobile UI Kit includes complete implementations of all **17 Sketch artboards**:

| # | Screen | Sketch Artboard ID | Route | Description |
|---|---|---|---|---|
| 1 | **Onboarding 1** | `75FC1148` | `src/app/index.jsx` | "Proven specialists" — We check each specialist before he starts work. |
| 2 | **Onboarding 2** | `FF90682A` | `src/app/index.jsx` | "Honest ratings" — We carefully check each specialist and put honest ratings. |
| 3 | **Onboarding 3** | `01B4324C` | `src/app/index.jsx` | "Insured orders" — We insure each order for the amount of $500. |
| 4 | **Onboarding 4** | `EB641DD2` | `src/app/index.jsx` | "Create order" — It's easy, just click on the plus. |
| 5 | **Sign In** | `34CB15C5` | `src/app/login.jsx` | Username, Password, Forgot Password, Login CTA, and Social Logins (Facebook, Twitter, LinkedIn). |
| 6 | **Sign Up** | `7C605230` | `src/app/signup.jsx` | Email, Password, Confirm Password, Sign Up CTA, and Social Providers. |
| 7 | **Categories** | `D0B4373D` | `src/app/(tabs)/index.jsx` | Search by category, Courier, Furniture, Cleaning, Equipment, Interior, Construction. |
| 8 | **Profile** | `8D9F2E1D` | `src/app/(tabs)/profile.jsx` | Jeremías del Pozo, New York, ID: 1120611, About Me, Reviews, Phone, Email, Edit. |
| 9 | **Menu Profile** | `2739AA34` | `src/app/(tabs)/profile.jsx` | Navigation drawer: Home, Settings, Profile, Messages, Reviews, Logout. |
| 10 | **Notification** | `A040871E` | `src/app/(tabs)/notifications.jsx` | Notification feed: Joel Rowe, Cole Payne, Elva Stone with task statuses. |
| 11 | **Order in Progress** | `C13DE3F8` | `src/app/(tabs)/orders.jsx` | Active orders cards: Balcony repair ($24), Redecorating ($60), Painting works ($42), Interior design ($54). |
| 12 | **Construction works** | `16CDB42C` | `src/app/construction.jsx` | Specializations: Welding works, Foundation works, Roofing, Waterproofing, Architecture, Design. |
| 13 | **Payment for services**| `C191365E` | `src/app/payment.jsx` | Service invoice: Welding ($40), Foundation ($55), Waterproofing ($20), Total $105, Checkout. |
| 14 | **Customer Info** | `A07B5DDF` | `src/app/contractor.jsx` | Contractor portfolio grid, "The last completed works of the contractor", and detailed bio. |
| 15 | **Settings** | `E1BDA7E9` | `src/app/settings.jsx` | Payment cards, Write to us, Rate us on App Store, About Us, Log Out. |
| 16 | **Payment cards** | `58E17507` | `src/app/cards.jsx` | Virtual debit cards carousel ($25,388, card 3872, exp 17/20). |
| 17 | **Payment cards 2** | `4718808F` | `src/app/cards.jsx` | Card Number, Exp. Month, Exp. Year, CVV inputs, and payment confirmation. |

## 🛠️ Tech Stack

- **Framework**: React Native 0.88+ / Expo SDK 58+
- **Navigation**: Expo Router (Tabs & Stacks)
- **Language**: JavaScript & JSX (`.js`, `.jsx` strictly)
- **Icons**: `@expo/vector-icons` (Ionicons)

<!-- run-locally:start -->

## ▶️ Run locally

```bash
npm install
npx expo start
```

Then press `i` for the iOS simulator, `a` for Android, or `w` for the web, or scan the QR code with Expo Go.

<!-- run-locally:end -->

---

<!-- design-credits:start -->

## 🎨 Design Credits

This app is based on the free **Mobile UI Kit** design by **Outcrowd**, downloaded from Sketch App Sources. All visual design credit goes to the designer. It follows the design's screens, user flows and content; visual details (exact spacing, fonts, some colours and illustrations) are approximated and may differ from the original.

| | |
|---|---|
| Designer | [Outcrowd](https://www.sketchappsources.com/contributor/outcrowd) |
| Original design | [Mobile UI Kit](https://dribbble.com/shots/14442530-Free-Mobile-UI-Kit-Outcrowd) |
| Downloaded from | [Sketch App Sources](https://www.sketchappsources.com/free-source/4615-mobile-ui-kit-sketch-freebie-resource.html) |
| Dribbble | <http://www.dribbble.com/outcrowd> |
| Twitter | <https://twitter.com/outcrowdstudio> |
| Website | <https://www.outcrowd.io/> |
| Original file | `mobile-ui-kit-outcrowd-community.sketch` |
| License / usage | Free for personal and commercial use (stated by the designer on the source page). |

**Attribution:**

> UI design: "Mobile UI Kit" by Outcrowd (https://dribbble.com/shots/14442530-Free-Mobile-UI-Kit-Outcrowd), downloaded from Sketch App Sources (https://www.sketchappsources.com/free-source/4615-mobile-ui-kit-sketch-freebie-resource.html).

The original design source files are not included in this repository; get them from the links above. This app's **code** is released under the [MIT License](./LICENSE); the visual design remains the designer's (see [NOTICE](./NOTICE)).

Photos, brand logos and avatars inside the design may belong to third parties and are not covered by the designer's permission.

<!-- design-credits:end -->
