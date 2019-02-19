# Hands on tutorial for building Serverless backend on AWS

### Set up NVM:

1. Install nvm

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

2. Close current terminal and open a new one.

3. Install Node.js

```
nvm install v10.0.0
```

4. Verify Node version

```
node -v
```

### Set up project

5. Clone this repository

```
git clone https://github.com/azarboon/aws-demo
cd aws-demo
```

6. Install project dependencies

```
npm install
```

7. If you are using shared account, make sure to chnage project name in serverless.yml

```
npm run deploy
```
