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

Frmo now on, you are set to continue working in the current shell. Please note that in case you open a new shell, you need to again set the node version to be able to do our tasks properly. You can set the node version by:

```
nvm use v10.0.0
```

So, lease do this whenever you would like to contniue our assignments in a new shell.

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
