import { Lesson } from '@/types';

export const investingLessons: Lesson[] = [
  // ──────────────────────────────────────────────
  // Lesson 1: What is Investing?
  // ──────────────────────────────────────────────
  {
    id: 'investing-0',
    trackId: 'investing',
    index: 0,
    title: 'What is Investing?',
    description: 'Learn how investing is like planting money seeds that grow over time.',
    xpReward: 20,
    screens: [
      // ── Content Screen 1 ──
      {
        type: 'content',
        title: 'Planting Money Seeds',
        body: 'Imagine you have a magic seed. Instead of growing into a flower, it grows into more money! That is what investing is — you take some of your money and put it to work so it can grow into even more money over time. Just like a seed needs sunshine and water, your investment needs time and patience to grow. Watch your Money Monster grow with wise investing!',
      },
      // ── Quiz 1: Multiple Choice ──
      {
        type: 'multiple-choice',
        variants: {
          easy: {
            question: 'What is investing most like?',
            options: [
              { id: 'a', text: 'Planting a seed and watching it grow' },
              { id: 'b', text: 'Eating all your sweets at once' },
              { id: 'c', text: 'Throwing money in the bin' },
            ],
            correctAnswer: 'a',
            explanation: 'Investing is like planting a seed — you put money in and watch it grow bigger over time!',
          },
          medium: {
            question: 'What does it mean to invest your money?',
            options: [
              { id: 'a', text: 'Spending it on things you want right now' },
              { id: 'b', text: 'Putting it to work so it can grow over time' },
              { id: 'c', text: 'Hiding it under your mattress forever' },
            ],
            correctAnswer: 'b',
            explanation: 'Investing means putting your money to work — like in stocks or bonds — so it can grow into more money over time.',
          },
          hard: {
            question: 'Which of the following best describes why people invest their money instead of just saving it in a money jar?',
            options: [
              { id: 'a', text: 'Invested money has the potential to grow faster than money sitting idle' },
              { id: 'b', text: 'Money in a jar automatically doubles every year' },
              { id: 'c', text: 'Investing guarantees you will never lose any money' },
            ],
            correctAnswer: 'a',
            explanation: 'Investing gives your money the potential to grow through returns, whereas money sitting in a money jar does not earn anything and can even lose value due to inflation.',
          },
        },
      },
      // ── Quiz 2: True/False ──
      {
        type: 'true-false',
        variants: {
          easy: {
            question: 'Investing means your money can grow over time.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'That is right! When you invest, your money has the chance to grow bigger, just like a plant grows from a tiny seed.',
          },
          medium: {
            question: 'Investing always means you will make money and never lose any.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'Investing can help your money grow, but there is always some risk. Sometimes investments go down in value before they go back up.',
          },
          hard: {
            question: 'An investor who puts money into a company is guaranteed a profit because the company must pay them back.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'Investments carry risk. A company could lose value or even go out of business, meaning the investor could lose some or all of their money.',
          },
        },
      },
      // ── Content Screen 2 ──
      {
        type: 'content',
        title: 'Why Do People Invest?',
        body: 'People invest because they want their money to grow for the future. Maybe they want to buy a house, pay for university, or retire someday. If you just keep your money in a money jar, it stays the same amount. But if you invest it wisely, it can slowly become more and more — like a snowball rolling downhill getting bigger and bigger! Your Money Monster loves it when your investments grow!',
      },
      // ── Quiz 3: Tap Match ──
      {
        type: 'tap-match',
        variants: {
          easy: {
            question: 'Match each word to what it means!',
            matchPairs: [
              { left: 'Investing', right: 'Putting money to work' },
              { left: 'Growing', right: 'Getting bigger over time' },
              { left: 'Patience', right: 'Waiting without giving up' },
            ],
          },
          medium: {
            question: 'Match each investing idea to its description.',
            matchPairs: [
              { left: 'Investor', right: 'A person who puts money to work' },
              { left: 'Risk', right: 'The chance of losing money' },
              { left: 'Return', right: 'The money you earn from investing' },
              { left: 'Patience', right: 'Giving your investment time to grow' },
            ],
          },
          hard: {
            question: 'Match each investing concept to its correct definition.',
            matchPairs: [
              { left: 'Portfolio', right: 'A collection of investments' },
              { left: 'Diversification', right: 'Spreading money across different investments' },
              { left: 'Risk', right: 'The possibility of losing some value' },
              { left: 'Return', right: 'Profit earned from an investment' },
            ],
          },
        },
      },
      // ── Quiz 4: Fill in the Blank ──
      {
        type: 'fill-blank',
        variants: {
          easy: {
            question: 'Investing is like planting a ___ that grows into more money.',
            options: [
              { id: 'a', text: 'seed' },
              { id: 'b', text: 'rock' },
              { id: 'c', text: 'shoe' },
            ],
            correctAnswer: 'a',
            explanation: 'Investing is like planting a seed — you put a little bit of money in and, with time, it can grow into something much bigger!',
          },
          medium: {
            question: 'When you invest, you put your money to ___ so it can grow over time.',
            options: [
              { id: 'a', text: 'sleep' },
              { id: 'b', text: 'work' },
              { id: 'c', text: 'waste' },
            ],
            correctAnswer: 'b',
            explanation: 'Investing means putting your money to work. Instead of sitting still, your money earns more money for you.',
          },
          hard: {
            question: 'An investor accepts ___ in exchange for the potential of earning returns on their money.',
            options: [
              { id: 'a', text: 'risk' },
              { id: 'b', text: 'sweets' },
              { id: 'c', text: 'homework' },
            ],
            correctAnswer: 'a',
            explanation: 'Every investment carries some risk — the chance that you could lose money. Investors accept this risk because they hope to earn returns that make their money grow.',
          },
        },
      },
    ],
  },

  // ──────────────────────────────────────────────
  // Lesson 2: Stocks and Bonds
  // ──────────────────────────────────────────────
  {
    id: 'investing-1',
    trackId: 'investing',
    index: 1,
    title: 'Stocks and Bonds',
    description: 'Discover what it means to own a piece of a company and lend money to earn interest.',
    xpReward: 20,
    screens: [
      // ── Content Screen 1 ──
      {
        type: 'content',
        title: 'What Are Stocks?',
        body: 'Imagine your favourite pizza shop is so popular that the owner wants to open more shops. To get the money, the owner sells tiny pieces of the business called stocks. When you buy a stock, you own a small piece of that company! If the pizza shop does really well, your piece becomes worth more. You become a part-owner — pretty cool, right? Your Money Monster just got a slice of the action!',
      },
      // ── Quiz 1: Fill in the Blank ──
      {
        type: 'fill-blank',
        variants: {
          easy: {
            question: 'When you buy a stock, you own a small ___ of a company.',
            options: [
              { id: 'a', text: 'piece' },
              { id: 'b', text: 'building' },
              { id: 'c', text: 'lunch' },
            ],
            correctAnswer: 'a',
            explanation: 'A stock is a tiny piece of a company. When you buy one, you become a part-owner!',
          },
          medium: {
            question: 'A stock represents a share of ___ in a company.',
            options: [
              { id: 'a', text: 'ownership' },
              { id: 'b', text: 'homework' },
              { id: 'c', text: 'furniture' },
            ],
            correctAnswer: 'a',
            explanation: 'Stocks represent ownership. Each share is a tiny fraction of the company that you own.',
          },
          hard: {
            question: 'When a company sells stocks to the public for the first time, it is called an ___.',
            options: [
              { id: 'a', text: 'IPO (Initial Public Offering)' },
              { id: 'b', text: 'IOU (I Owe You)' },
              { id: 'c', text: 'ATM (Automated Teller Machine)' },
            ],
            correctAnswer: 'a',
            explanation: 'An IPO, or Initial Public Offering, is when a company first sells its stock to the public on a stock exchange such as the London Stock Exchange.',
          },
        },
      },
      // ── Quiz 2: Multiple Choice ──
      {
        type: 'multiple-choice',
        variants: {
          easy: {
            question: 'What is a bond?',
            options: [
              { id: 'a', text: 'A type of sweet' },
              { id: 'b', text: 'A loan you give to a company or government that pays you back with extra' },
              { id: 'c', text: 'A sticker you put on your notebook' },
            ],
            correctAnswer: 'b',
            explanation: 'A bond is like lending your money to someone. They promise to pay you back later with a little extra as a thank you!',
          },
          medium: {
            question: 'How is buying a bond different from buying a stock?',
            options: [
              { id: 'a', text: 'A bond means you are lending money, while a stock means you own a piece of the company' },
              { id: 'b', text: 'Bonds and stocks are exactly the same thing' },
              { id: 'c', text: 'A bond means you own the whole company' },
            ],
            correctAnswer: 'a',
            explanation: 'With a bond, you are a lender — you lend money and get paid back with interest. With a stock, you are an owner — you own a small piece of the company.',
          },
          hard: {
            question: 'Why are bonds generally considered less risky than stocks?',
            options: [
              { id: 'a', text: 'Bonds promise a fixed return and repayment, while stock values can go up or down unpredictably' },
              { id: 'b', text: 'Bonds always make more money than stocks' },
              { id: 'c', text: 'Bonds are backed by gold, while stocks are not' },
            ],
            correctAnswer: 'a',
            explanation: 'Bonds offer a fixed interest rate and a promise to repay, making them more predictable. UK government bonds, known as gilts, are considered especially safe. Stocks can gain or lose value based on how the company performs, which makes them riskier but potentially more rewarding.',
          },
        },
      },
      // ── Content Screen 2 ──
      {
        type: 'content',
        title: 'What Are Bonds?',
        body: 'A bond is like being the bank! When a company or the government needs money, they can borrow it from people like you. You lend them your money, and they promise to pay you back later — plus a little extra called interest. Bonds are usually safer than stocks because you know how much you will get back, but they usually grow your money more slowly. In the UK, government bonds are called gilts — and they are one of the safest investments around!',
      },
      // ── Quiz 3: True/False ──
      {
        type: 'true-false',
        variants: {
          easy: {
            question: 'When you buy a stock, you own a tiny piece of a company.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'Yes! A stock is a small piece of a company. If you buy one, you are a part-owner.',
          },
          medium: {
            question: 'Bonds are riskier than stocks because you never know if you will get your money back.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'Actually, bonds are generally less risky than stocks. When you buy a bond, the borrower promises to pay you back with interest on a set schedule.',
          },
          hard: {
            question: 'A shareholder is someone who owns bonds in a company.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'A shareholder owns shares (stocks) in a company, not bonds. A person who owns bonds is called a bondholder.',
          },
        },
      },
      // ── Quiz 4: Tap Match ──
      {
        type: 'tap-match',
        variants: {
          easy: {
            question: 'Match the word to what it means!',
            matchPairs: [
              { left: 'Stock', right: 'A tiny piece of a company' },
              { left: 'Bond', right: 'A loan you give to earn extra' },
              { left: 'Owner', right: 'Someone who has a piece of something' },
            ],
          },
          medium: {
            question: 'Match each term to the correct description.',
            matchPairs: [
              { left: 'Stock', right: 'Ownership share in a company' },
              { left: 'Bond', right: 'A loan that pays interest' },
              { left: 'Dividend', right: 'A payment companies give to shareholders' },
              { left: 'Interest', right: 'Extra money earned on a bond' },
            ],
          },
          hard: {
            question: 'Match each investing term to its correct definition.',
            matchPairs: [
              { left: 'London Stock Exchange', right: 'A marketplace where stocks are bought and sold' },
              { left: 'Bondholder', right: 'A person who lends money through bonds' },
              { left: 'Dividend', right: 'A share of profits paid to shareholders' },
              { left: 'Maturity date', right: 'When a bond must be repaid in full' },
            ],
          },
        },
      },
    ],
  },

  // ──────────────────────────────────────────────
  // Lesson 3: The Magic of Compound Interest
  // ──────────────────────────────────────────────
  {
    id: 'investing-2',
    trackId: 'investing',
    index: 2,
    title: 'The Magic of Compound Interest',
    description: 'Explore how your money earns money on its money — and why starting early is a superpower.',
    xpReward: 20,
    screens: [
      // ── Content Screen 1 ──
      {
        type: 'content',
        title: 'Money That Makes Money',
        body: 'Here is a magical secret about money: it can make more money all by itself! When you invest or save money, you earn a little extra called interest. But here is the really cool part — that extra money also starts earning its own interest. It is like a snowball rolling down a hill: it starts small but gets bigger and bigger the longer it rolls. This is called compound interest! Your Money Monster loves compound interest!',
      },
      // ── Quiz 1: True/False ──
      {
        type: 'true-false',
        variants: {
          easy: {
            question: 'Compound interest means your money can grow bigger and bigger over time.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'That is right! With compound interest, you earn interest on your interest, so your money grows faster and faster like a snowball rolling downhill.',
          },
          medium: {
            question: 'Compound interest only works on the money you originally put in, not on the interest you have already earned.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'That describes simple interest. Compound interest is special because it works on both your original money AND the interest you have already earned.',
          },
          hard: {
            question: 'If two people invest the same amount and earn the same rate, the one who started five years earlier will have significantly more money due to compound interest.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'Time is the most powerful ingredient in compound interest. Those extra five years allow interest to compound on a larger and larger amount, creating a big advantage. A Junior ISA is a brilliant way for young people in the UK to get started early!',
          },
        },
      },
      // ── Quiz 2: Tap Match ──
      {
        type: 'tap-match',
        variants: {
          easy: {
            question: 'Match each idea to the right picture!',
            matchPairs: [
              { left: 'Compound interest', right: 'Money grows on top of money' },
              { left: 'Snowball', right: 'Gets bigger as it rolls' },
              { left: 'Time', right: 'Helps your money grow more' },
            ],
          },
          medium: {
            question: 'Match each term to what it means for compound interest.',
            matchPairs: [
              { left: 'Principal', right: 'The original amount you invest' },
              { left: 'Interest', right: 'Extra money earned on your balance' },
              { left: 'Compounding', right: 'Earning interest on your interest' },
              { left: 'Time', right: 'The longer you wait, the more you earn' },
            ],
          },
          hard: {
            question: 'Match each compound interest concept to its correct meaning.',
            matchPairs: [
              { left: 'Principal', right: 'The starting amount invested' },
              { left: 'Compound frequency', right: 'How often interest is calculated' },
              { left: 'Rule of 72', right: 'A shortcut to estimate how fast money doubles' },
              { left: 'Exponential growth', right: 'Growth that speeds up over time' },
            ],
          },
        },
      },
      // ── Content Screen 2 ──
      {
        type: 'content',
        title: 'Why Starting Early Matters',
        body: 'The biggest secret of compound interest is TIME. The earlier you start, the more time your money has to grow. If you invest ten pounds today and it doubles every few years, in a long time it could become hundreds of pounds — all from just ten pounds! That is why even kids can become great investors. Starting early is your superpower! In the UK, young people can use a Junior ISA to save and invest tax-free — a perfect way to let your monster vault grow!',
      },
      // ── Quiz 3: Multiple Choice ──
      {
        type: 'multiple-choice',
        variants: {
          easy: {
            question: 'What helps compound interest work the best?',
            options: [
              { id: 'a', text: 'Spending your money quickly' },
              { id: 'b', text: 'Giving your money lots of time to grow' },
              { id: 'c', text: 'Keeping your money in your pocket' },
            ],
            correctAnswer: 'b',
            explanation: 'Time is the secret ingredient! The longer your money is invested, the more compound interest can work its magic.',
          },
          medium: {
            question: 'If you invest £100 and earn 10% interest compounded each year, what happens in the second year?',
            options: [
              { id: 'a', text: 'You earn interest on £100 again' },
              { id: 'b', text: 'You earn interest on £110 because your interest earned interest too' },
              { id: 'c', text: 'You stop earning interest after the first year' },
            ],
            correctAnswer: 'b',
            explanation: 'After the first year you have £110. In the second year, you earn interest on the full £110 — that is £11 instead of £10. That is compound interest in action!',
          },
          hard: {
            question: 'Using the Rule of 72, approximately how many years would it take to double your money at a 6% annual compound interest rate?',
            options: [
              { id: 'a', text: 'About 12 years' },
              { id: 'b', text: 'About 6 years' },
              { id: 'c', text: 'About 72 years' },
            ],
            correctAnswer: 'a',
            explanation: 'The Rule of 72 says you divide 72 by the interest rate. 72 divided by 6 equals 12, so it would take about 12 years to double your money at 6% compound interest.',
          },
        },
      },
      // ── Quiz 4: Fill in the Blank ──
      {
        type: 'fill-blank',
        variants: {
          easy: {
            question: 'Compound interest is like a ___ rolling down a hill — it keeps getting bigger!',
            options: [
              { id: 'a', text: 'snowball' },
              { id: 'b', text: 'sandwich' },
              { id: 'c', text: 'balloon' },
            ],
            correctAnswer: 'a',
            explanation: 'A snowball picks up more snow as it rolls, getting bigger and bigger — just like compound interest makes your money grow faster and faster over time!',
          },
          medium: {
            question: 'With compound interest, you earn interest on your original money AND on the ___ you have already earned.',
            options: [
              { id: 'a', text: 'interest' },
              { id: 'b', text: 'pocket money' },
              { id: 'c', text: 'taxes' },
            ],
            correctAnswer: 'a',
            explanation: 'That is what makes compound interest so powerful — you earn interest on your interest! Your earnings keep building on top of each other.',
          },
          hard: {
            question: 'The Rule of 72 estimates how long it takes to ___ your money by dividing 72 by the annual interest rate.',
            options: [
              { id: 'a', text: 'double' },
              { id: 'b', text: 'triple' },
              { id: 'c', text: 'halve' },
            ],
            correctAnswer: 'a',
            explanation: 'The Rule of 72 is a handy shortcut: divide 72 by your annual interest rate, and you get the approximate number of years needed to double your investment.',
          },
        },
      },
    ],
  },
];
