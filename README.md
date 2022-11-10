# mkey-generator-plus-backend
MKey Generator Plus (Backend) is an Express.JS server that handle the data of [mkey (zoogie version)](https://github.com/zoogie/mkey)

**Only for 3DS (CTR - 1.0-11.16 - US,EU,JP,KR,TW,CN) for now !**

## Usage

1. Make sure you have [Python](https://www.python.org/downloads/) and [Node.JS](https://nodejs.org/en/download/) installed

2. Clone the repository anywhere you want
```shell
git clone https://github.com/Lunyyx/mkey-generator-plus-backend.git
```

3. Go in the created folder
```
cd mkey-generator-plus-backend
```

4. Install the Python and Node.js dependencies 
```
npm install
pip install pycryptodome
```

5. Start the server
```
node index
```

Your server should be accessible from: https://127.0.0.1:3001

## Available parameters

| Parameter     | Description                                             | Format     | Needed |
|---------------|---------------------------------------------------------|------------|--------|
| m             | The month of your console date                          | 00 or 0    | Yes    |
| d             | The day of your console date                            | 00 or 0    | Yes    |
| inquiryNumber | The code given when you forgot the parental control PIN | 0000000000 | Yes    |
| device        | The codename of your device (only CTR for now)          | XXX        | Yes    |

### Example

> GET http://localhost:3001/?m=8&d=01&inquiryNumber=1234567890&device=CTR
```json
{"master_key":96773}
```
