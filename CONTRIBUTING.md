# Contributing to Satoshi Shuffle  

Thank you for considering contributing to Satoshi Shuffle! This project aims to build a **provably fair betting game** using Nostr and Lightning Network. Whether you’re reporting bugs, suggesting features, or submitting code, your input is valued.  

---

## Table of Contents  
1. [Code of Conduct](#code-of-conduct)  
2. [Getting Started](#getting-started)  
3. [How to Contribute](#how-to-contribute)  
4. [Code Style](#code-style)  
5. [Testing](#testing)  
6. [Pull Request Guidelines](#pull-request-guidelines)  
7. [Reporting Bugs](#reporting-bugs)  
8. [Suggesting Features](#suggesting-features)  

---

## Code of Conduct  
This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you’re expected to uphold this standard.  

---

## Getting Started  
### Prerequisites  
- **Node.js** (v18+): [Download here](https://nodejs.org/)  
- **Git**: [Download here](https://git-scm.com/)  
- **Lightning Network node** or API (e.g., LNBits).  
- **Nostr private key** for testing server seed signing.  

### Setup Instructions  
1. **Fork the repository**:  
   ```bash  
   git clone https://github.com/LiteBit/satoshi-shuffle.git  
   cd satoshi-shuffle  
   git remote add upstream https://github.com/LiteBit/satoshi-shuffle.git  
   ```  

2. **Install dependencies**:  
   ```bash  
   npm install  
   ```  

3. **Configure environment variables**:  
   Copy `.env.example` to `.env` and update values:  
   ```env  
   NOSTR_PRIVATE_KEY="YOUR_NOSTR_PRIVATE_KEY"  
   LIGHTNING_API_URL="https://your-lightning-api.com"  
   MODULUS=69420  
   ```  

4. **Start the development server**:  
   ```bash  
   npm run dev  
   ```  

---

## How to Contribute  
### 1. Report Bugs  
- **Search existing issues** to avoid duplicates.  
- **Open a new issue** with:  
  - Steps to reproduce.  
  - Expected vs. actual behavior.  
  - Screenshots or logs (if applicable).  

### 2. Suggest Features  
- Open a new issue under the **enhancement** label.  
- Propose clear use cases and potential solutions.  

### 3. Submit Code Changes  
1. **Create a feature branch**:  
   ```bash  
   git checkout -b feature/your-feature-name  
   ```  

2. **Write tests** for new functionality (if applicable).  

3. **Run linters and tests**:  
   ```bash  
   npm run lint  
   npm test  
   ```  

4. **Commit changes** with clear messages (use imperative mood, e.g., `Fix seed rotation logic`).  

5. **Push to your fork** and create a **pull request** (PR).  

---

## Code Style  
- **Formatting**: Use [Prettier](https://prettier.io/) for auto-formatting.  
- **Linting**: Follow ESLint rules.  
- **Commit Messages**: Use conventional commits (e.g., `feat: add mobile-responsive UI`).  

---

## Testing  
- **Unit Tests**: Use Jest for backend tests.  
  ```bash  
  npm test  
  ```  
- **Integration Tests**: Test frontend interactions via manual checks or Cypress (add later).  

---

## Pull Request Guidelines  
Your PR should:  
- Target the **main branch**.  
- Include tests for new code.  
- Resolve all linting/formatting errors.  
- Reference related issues (e.g., `Fixes #123`).  

**Review Process**:  
- Maintainers will review your PR within 3–5 business days.  
- Feedback may include requests for changes.  

---

## Reporting Bugs  
Use the [Bug Report template](ISSUE_TEMPLATE/bug_report.md) to ensure clarity.  

---

## Suggesting Features  
Use the [Feature Request template](ISSUE_TEMPLATE/feature_request.md) to outline your proposal.  

---

## Questions?  
- Join the [GitHub Discussions](https://github.com/LiteBit/satoshi-shuffle/discussions).  
- Ask in the [Nostr community](https://nostr.band).  

Thank you for helping make Satoshi Shuffle better! 🎲⚡  

---  

### License  
By contributing, you agree that your contributions will be licensed under the **MIT License**.  

---
