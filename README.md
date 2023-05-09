# Jamoaviy Uniboom loyihasi qo'llanmasiga xush kelibsiz!

README.md fayli sizga loyihani bajarishingizda qo'llanma sifatida xizmat qiladi.
Quyidagi berilgan ketma ketlikni bajaring:

1. Ushbu reponi githubdan clone qilib olasiz
2. Loyihani local'da ochib `npm install` buyrug'ini terminalga yozasiz.
3. So'ngra `npm run start` buyrugini yozasiz


## Tavsiya etiladigan extensionlarni o'rnatib olish

`.vscode\extensions.json` - ushbu file'da barcha kerakli bo'lgan, ishimizni
osonlashtiradigan extensionlar ro'yhati berib o'tilgan. Har bitta extensionni
install qilib olishingiz kerak bo'ladi. Install qilish uchun berilgan
extensionning ID'isi maxsus extensionlar bo'limidan izlayasiz va **install**
tugmasi bosasiz.

## Bosqichlar

Loyiha ustida qiynalmasdan ishlashingiz uchun uni ikkita qisimga bo'lib chiqdim.
Har bir vazifa uchun alohida branch ochasiz (_vazifa-raqam-tavsifi_)
ko'rinishida bo'lishi kerak. Misol uchun birinchi vazifa ustida ishlashni
boshlayotgan bo'lsangiz quyidagicha ko'rinishda yangi branch ochasiz:
`git checkout -b vazifa-1-verstka` Har bitta vazifani tugatganingizdan so'ng
**PR raise** qilgan holda mendan **code review** request qilasiz.

⚠️ Hech bir PR'ni mendan **approval** olmasdan asosiy branch'ga merge qilib
yubormang. Approval olganingizdan so'nggina merge qilsangiz bo'ladi. Ogohlik
barchamizning burchimizdur, ogoh bo'ling!

Ureeee, endi hamma narsa tayyor. Qo'llarni shimarib, coffee'ni damlab olib ☕,
kod yozishga kirishsak ham bo'ladi 👩‍💻, barchaga omad ✊

- [1-bosqich: UI design](src/instructions/1-bosqich.md) (~10 kun)
- [2-bosqich: React logic](src/instructions/2-bosqich.md) (~ kun)

## Code review jarayoni: PR qanday qilib raise qilinadi?

Yangi branchga o'tib, yangi bosqich ustida ishlashdan avval, **origin** va
**main** pull qilib oling. Quyidagicha:

```
git pull origin main
```

Deylik birinchi bosqchini tugatdingiz (vazifa-1-verstka branchda). Endi muammo
bo'lmasligi uchun, har ehtimolga qarshi mainga o'tib `git pull origin main`
buyrug'ini yana bir bor ishlatasiz. Undan so'ng, vazifa branchga o'tib
(`git checkout vazifa-1-verstka`), quyidagi ketma ketlikni bajarasiz:

1. `git add` va `git commit` o'z o'rnida ketaveradi. Buni bilasiz, ortiqcha
   to'xtalishga xojat yo'q.
2. Commitdan so'ng `git rebase -i master` - Interaktiv rebase buyrug'i
   - [Interaktiv rebase haqida ma'lumot](https://www.youtube.com/watch?v=m-GIJOEh798&t=4s&ab_channel=Front-endSciencec%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B5%D0%BC%D0%9F%D1%83%D0%B7%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%8B%D0%B)
   - [Merge va Rebase'ning bir biridan farqi](https://www.youtube.com/watch?v=f1wnYdLEpgI&ab_channel=TheModernCoder)
3. Rebase tugagandan so'ng, hammasi yaxshi bo'lsa,
   `git push origin vazifa-1-verstka`. (⚠️ Mainga push qilmang hech qachon)
4. Mandan review request qilasiz.
5. Agar hammasi yaxshi bo'lsa, PR reviewdan o'tsa, keyin merge qilaverasiz. Aks
   holda, PR'ni to'g'irlab, qaytadan review request qilasiz
6. Aytilgan vazifalarni o'z vaqtida topshirish shart!


# uniboom-app
