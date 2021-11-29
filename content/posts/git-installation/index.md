---
title: نصب Git
date: "2021-11-02T11:30Z"
featuredImage: ../../thumbnails/git.png
---

## نصب Git در ویندوز (Windows)

برای نصب آخرین نسخه **Git** باید به سایت [www.git-scm.com](https://git-scm.com/) برید تا یک چیزی مثل شکل زیر ببینید:

![](./git-installation-1.png)

از قسمتی که مشخص کردم روی گزینه **Downloads** کلید کنید تا عکس زیر رو ببینید:

![](./git-installation-2.png)

حالا گزینه **Windows** رو انتخاب کنید تا عکس زیر بیاد:

![](./git-installation-2.png)

از قسمتی که با فلش مشخص کردم نسخه ۳۲ بیتی یا ۶۴ بیتی رو نسبت به سیستم عاملتون انتخاب کنید و دانلود کنید.
حالا دیگه فایلی رو که دانلود کردید اجرا کنید و آپشن های مورد نظر رو بخونید (اگر دفعه اولتونه، چیزی رو دست نزنید) و گزینه **Next** رو بزنید تا **Git** نصب بشه.

توی آخرین صفحه هم **Lunch Git Bash** رو تیک بزنید تا **Git Bash** براتون باز بشه. بدونید که **Git Bash** همون جایی هستش که میشه توش دستورات **Git** رو نوشت.

### تنظیم Username

حالا دستور زیر رو بزنید تا **Username** که باهاش قرار **Commit** انجام بدید رو تنظیم کنید.

دقت کنید
به جای اسم من باید اسم خودتون رو بزنید!

```bash
$ git config --global user.name "Massoud"
```

بعدشم دستور زیر رو بزنید تا **Email** که باهاش قرار **Commit** انجام بدید رو تنظیم کنید.

دقت کنید
به جای ایمیل من باید ایمیل خودتون رو بزنید!

```bash
$ git config --global user.email "massoud.maboudi@gmail.com"
```

## نصب Git در مکینتاش (Mac)

### نصب با Homebrew

اول از همه باید بگم که **Homebrew** یه **Package Manager** هستش که با استفاده از اون میتونید کلی پکیج های مختلفی نصب کنید و دردسرهای مختلف نصب اونها رو کم کنید.

برای اینکه با استفاده ازش بتونیم پایتون رو نصب کنیم باید اول **XCode** رو نصب کنیم یا اگر داریمش، آپدیتش کنیم. باید بدونید که **XCode** ابزاریه برای خود **Apple** که با اون میشه برای سیستم عامل های **iOS** برنامه نویسی کرد و البته کلی کار دیگه باهاش میشه انجام داد که توی این آموزش بهشون نیاز نداریم. برای نصبش کد زیر رو توی ترمینال بزنید:

```bash
$ xcode-select --install
```

البته نصبش هم حجم زیادی از اینترنت رو مصرف میکنه (برای من ۲ گیگ مصرف کرد) و همینطور زمان زیادی میگیره. وسطش هم کلی سوال میکنه که باید تقریبا به همشون جواب مثبت بدید.

وقتی که تموم شد نصب **XCode**، باید بریم سراغ **Homebrew**. دستور زیر رو توی ترمینال بزنید:

```bash
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

وقتی که تموم شد نصبش، برای اینکه ببینیم کارمون درست بوده یا نه، دستور زیر رو بزنید و نتیجه رو ببینید:

```bash
$ brew doctor
Your system is ready to brew.
```

حالا وقتشه بریم سراغ **Git**. برای نصب آخرین ورژن **Git** میتونید دستور زیر رو بزنید توی ترمینال:

```bash
$ brew install git
```

برای اینکه نتیجه عملمون رو ببینیم هم دستور زیر رو بزنید توی ترمینال:

```bash{outputLines: 2}{promptUser: root}
$ git --version
git version 2.26.1
```

حالا دستور زیر توی ترمینال رو بزنید تا **Username** که باهاش قرار **Commit** انجام بدید رو تنظیم کنید.

دقت کنید
به جای اسم من باید اسم خودتون رو بزنید!

```bash
$ git config --global user.name "Massoud"
```
بعدشم دستور زیر رو بزنید تا **Email** که باهاش قرار **Commit** انجام بدید رو تنظیم کنید.

دقت کنید
به جای ایمیل من باید ایمیل خودتون رو بزنید!

```bash
$ git config --global user.email "massoud.maboudi@gmail.com"
```

## نصب Git در لینوکس (Linux)

ساده ترین راه برای نصب **Git** توی سیستم عامل های مبتنی بر لینوکس به صورت دستورات زیره. دقت کنید که نسبت به نسخه لینوکستون دستور مورد نظر رو پیدا کنید.

### Debian/Ubuntu

```bash
$ apt-get install git
```

### Fedora

Fedora 22 and later:

```bash
$ dnf install git 
```

up to Fedora 21:

```bash
$ yum install git 
```

### Gentoo

```bash
$ emerge --ask --verbose dev-vcs/git
```

### Arch Linux

```bash
$ pacman -S git
```

### openSUSE

```bash
$ zypper install git
```

### Mageia

```bash
$ urpmi git
```

### تنظیم Username

حالا دستور زیر توی ترمینال رو بزنید تا **Username** که باهاش قرار **Commit** انجام بدید رو تنظیم کنید.

دقت کنید
به جای اسم من باید اسم خودتون رو بزنید!

```bash
$ git config --global user.name "Massoud"
```

بعدشم دستور زیر رو بزنید تا **Email** که باهاش قرار **Commit** انجام بدید رو تنظیم کنید.

دقت کنید
به جای ایمیل من باید ایمیل خودتون رو بزنید!

```bash
$ git config --global user.email "massoud.maboudi@gmail.com"
```
