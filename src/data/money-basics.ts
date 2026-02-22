import { Lesson } from '@/types';

export const moneyBasicsLessons: Lesson[] = [
  // ─────────────────────────────────────────────
  // Lesson 0: What is Money?
  // ─────────────────────────────────────────────
  {
    id: 'money-basics-0',
    trackId: 'money-basics',
    index: 0,
    title: 'What is Money?',
    description: 'Learn what money is and why we use it',
    xpReward: 20,
    screens: [
      {
        type: 'content',
        title: 'What is Money?',
        body: 'Money is something people use to buy things they need or want. A long time ago, people didn\'t have money. Instead, they traded things with each other. A farmer might trade eggs for bread from a baker. This was called bartering. But bartering was tricky -- what if the baker didn\'t want eggs? That\'s why people invented money! Money is a tool that everyone agrees has value, so it makes trading much easier.',
      },
      {
        type: 'multiple-choice',
        variants: {
          easy: {
            question: 'What do we use money for?',
            options: [
              { id: 'a', text: 'To buy things' },
              { id: 'b', text: 'To plant in the garden' },
              { id: 'c', text: 'To throw away' },
            ],
            correctAnswer: 'a',
            explanation: 'We use money to buy things we need or want, like food, toys, and clothes!',
          },
          medium: {
            question: 'What was it called when people traded items instead of using money?',
            options: [
              { id: 'a', text: 'Shopping' },
              { id: 'b', text: 'Bartering' },
              { id: 'c', text: 'Gifting' },
            ],
            correctAnswer: 'b',
            explanation: 'Bartering is the old system of trading goods directly, like swapping eggs for bread. Money replaced bartering because it was simpler.',
          },
          hard: {
            question: 'Why did bartering become impractical as communities grew larger?',
            options: [
              { id: 'a', text: 'People ran out of things to trade' },
              { id: 'b', text: 'It required a "double coincidence of wants," meaning both parties had to want what the other offered' },
              { id: 'c', text: 'Bartering was made illegal' },
            ],
            correctAnswer: 'b',
            explanation: 'Bartering requires a "double coincidence of wants" -- both people must want what the other has. Money solves this by acting as a universally accepted medium of exchange.',
          },
        },
      },
      {
        type: 'content',
        title: 'Why is Money Special?',
        body: 'Money works because everyone agrees it has value. A £5 note is really just a piece of polymer, but because everyone trusts that it\'s worth something, you can use it to buy things anywhere. Money also makes it easy to save. Instead of keeping a pile of chickens in your back garden, you can keep money in a money jar or a real bank! Money comes in different forms -- coins, paper notes, and even digital money on computers. Your Money Monster loves learning about all the different kinds!',
      },
      {
        type: 'true-false',
        variants: {
          easy: {
            question: 'Money helps us buy things we need.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'That\'s right! Money is a tool we use to buy things like food, clothes, and toys.',
          },
          medium: {
            question: 'A £10 note has value because the polymer itself is worth ten pounds.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'The polymer in a £10 note is not worth much on its own. It has value because everyone agrees to accept it as payment.',
          },
          hard: {
            question: 'Money functions as a "store of value," meaning it lets you save purchasing power for use in the future.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'Correct! One of money\'s key functions is as a store of value. Unlike perishable goods, money can be saved and used later without losing its worth (aside from inflation).',
          },
        },
      },
      {
        type: 'tap-match',
        variants: {
          easy: {
            question: 'Match each word to what it means!',
            matchPairs: [
              { left: 'Money', right: 'Used to buy things' },
              { left: 'Trade', right: 'Swap one thing for another' },
              { left: 'Save', right: 'Keep for later' },
            ],
            explanation: 'Great job matching! Money is for buying, trading is swapping, and saving is keeping money for later.',
          },
          medium: {
            question: 'Match the money concept to its description.',
            matchPairs: [
              { left: 'Bartering', right: 'Trading goods directly' },
              { left: 'Currency', right: 'A country\'s form of money' },
              { left: 'Value', right: 'How much something is worth' },
              { left: 'Savings', right: 'Money set aside for the future' },
            ],
            explanation: 'Bartering means trading goods, currency is a country\'s money, value is what something is worth, and savings is money you keep for later.',
          },
          hard: {
            question: 'Match each function of money to its definition.',
            matchPairs: [
              { left: 'Medium of exchange', right: 'Accepted for buying and selling' },
              { left: 'Store of value', right: 'Holds worth over time' },
              { left: 'Unit of account', right: 'Measures the price of goods' },
              { left: 'Fiat money', right: 'Value set by government, not material' },
            ],
            explanation: 'Money serves as a medium of exchange, a store of value, and a unit of account. Fiat money has value because a government declares it legal tender, not because of the material it\'s made from.',
          },
        },
      },
      {
        type: 'fill-blank',
        variants: {
          easy: {
            question: 'We use ___ to buy things at the shop.',
            options: [
              { id: 'a', text: 'money' },
              { id: 'b', text: 'rocks' },
              { id: 'c', text: 'leaves' },
            ],
            correctAnswer: 'a',
            explanation: 'We use money to buy things at the shop!',
          },
          medium: {
            question: 'Before money was invented, people used a system called ___ to exchange goods.',
            options: [
              { id: 'a', text: 'banking' },
              { id: 'b', text: 'bartering' },
              { id: 'c', text: 'borrowing' },
            ],
            correctAnswer: 'b',
            explanation: 'Bartering was the system people used to trade goods directly before money existed.',
          },
          hard: {
            question: 'Money that has value because a government says it does, rather than being backed by a physical commodity, is called ___ money.',
            options: [
              { id: 'a', text: 'commodity' },
              { id: 'b', text: 'fiat' },
              { id: 'c', text: 'representative' },
            ],
            correctAnswer: 'b',
            explanation: 'Fiat money derives its value from government decree. Most modern currencies, like the British pound, are fiat money -- they aren\'t backed by gold or silver.',
          },
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Lesson 1: Coins and Notes
  // ─────────────────────────────────────────────
  {
    id: 'money-basics-1',
    trackId: 'money-basics',
    index: 1,
    title: 'Coins and Notes',
    description: 'Learn about different coins and notes',
    xpReward: 20,
    screens: [
      {
        type: 'content',
        title: 'Meet the Coins!',
        body: 'In the United Kingdom, we use coins and polymer notes. The coins we use are: 1p, 2p, 5p, 10p, 20p, 50p, £1, and £2. The smaller copper-coloured coins are 1p and 2p. The silver-coloured coins are 5p, 10p, 20p, and 50p. The £1 coin is gold and silver (bimetallic), and the £2 coin is also bimetallic with a gold outer ring. Every UK coin features a portrait of King Charles III on one side. Coins are made of various metals and last a very long time -- your Money Monster could collect them for years!',
      },
      {
        type: 'tap-match',
        variants: {
          easy: {
            question: 'Match each coin to how much it is worth!',
            matchPairs: [
              { left: '1p coin', right: '1 penny' },
              { left: '5p coin', right: '5 pence' },
              { left: '10p coin', right: '10 pence' },
              { left: '£1 coin', right: '100 pence' },
            ],
            explanation: 'Great work! A 1p coin is 1 penny, a 5p coin is 5 pence, a 10p coin is 10 pence, and a £1 coin is 100 pence.',
          },
          medium: {
            question: 'Match each coin to the correct description.',
            matchPairs: [
              { left: '1p coin', right: 'Small, copper-plated steel' },
              { left: '5p coin', right: 'Small, silver-coloured, round' },
              { left: '50p coin', right: 'Seven-sided silver-coloured coin' },
              { left: '£1 coin', right: 'Twelve-sided, gold and silver' },
            ],
            explanation: 'Each UK coin has a distinctive shape and colour. The 1p is copper-coloured, the 5p and 50p are silver-coloured (the 50p is seven-sided), and the £1 coin is twelve-sided and bimetallic.',
          },
          hard: {
            question: 'Match each UK coin to the metal composition it is primarily made of.',
            matchPairs: [
              { left: '1p coin', right: 'Copper-plated steel' },
              { left: '5p coin', right: 'Nickel-plated steel' },
              { left: '£1 coin', right: 'Nickel-brass and nickel-plated alloy' },
              { left: '£2 coin', right: 'Cupro-nickel and nickel-brass' },
            ],
            explanation: 'Modern 1p and 2p coins are copper-plated steel. The 5p, 10p, 20p, and 50p are nickel-plated steel. The £1 coin is bimetallic with nickel-brass and nickel-plated alloy, and the £2 is cupro-nickel with a nickel-brass ring.',
          },
        },
      },
      {
        type: 'content',
        title: 'Polymer Notes',
        body: 'Polymer notes come in four amounts: £5, £10, £20, and £50. Each note features King Charles III on the front and a famous historical figure on the back. The £5 note features the King, the £10 note shows Jane Austen, the £20 note has JMW Turner, and the £50 note features Alan Turing. UK notes are made from polymer (a thin, flexible plastic), which makes them waterproof, harder to counterfeit, and longer-lasting than old paper notes. They also have see-through windows and holograms as security features.',
      },
      {
        type: 'multiple-choice',
        variants: {
          easy: {
            question: 'Which coin is worth 50 pence?',
            options: [
              { id: 'a', text: '1p coin' },
              { id: 'b', text: '10p coin' },
              { id: 'c', text: '50p coin' },
            ],
            correctAnswer: 'c',
            explanation: 'A 50p coin is worth 50 pence. It\'s the seven-sided coin -- easy to spot because of its special shape!',
          },
          medium: {
            question: 'UK notes are made from which material?',
            options: [
              { id: 'a', text: 'Regular wood-pulp paper' },
              { id: 'b', text: 'A special blend of cotton and linen' },
              { id: 'c', text: 'Polymer (a thin, flexible plastic)' },
            ],
            correctAnswer: 'c',
            explanation: 'UK notes are made from polymer, a thin flexible plastic. This makes them waterproof, more durable, and harder to counterfeit than old paper notes.',
          },
          hard: {
            question: 'Which of the following is a security feature found on modern UK polymer notes to prevent counterfeiting?',
            options: [
              { id: 'a', text: 'A magnetic barcode on the back' },
              { id: 'b', text: 'A transparent window with a hologram that changes when tilted' },
              { id: 'c', text: 'A GPS tracking chip embedded inside' },
            ],
            correctAnswer: 'b',
            explanation: 'Modern UK polymer notes use transparent windows, holograms, raised print, and microlettering to deter counterfeiting. The see-through windows are especially hard to fake.',
          },
        },
      },
      {
        type: 'true-false',
        variants: {
          easy: {
            question: 'A 5p coin is bigger than a 10p coin.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'A 5p coin is actually smaller than a 10p coin! The 5p is one of the smallest UK coins, but the 10p is worth more and is larger.',
          },
          medium: {
            question: 'All UK coins feature a portrait of King Charles III.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'That\'s right! All current UK coins feature a portrait of the reigning monarch, King Charles III, on the front (obverse) side.',
          },
          hard: {
            question: 'The Bank of England £1 note is still widely used in everyday transactions across the UK.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'The Bank of England stopped issuing £1 notes in 1988. The £1 coin replaced the note for everyday use. However, £1 notes are still issued in Scotland and the Channel Islands.',
          },
        },
      },
      {
        type: 'fill-blank',
        variants: {
          easy: {
            question: 'A 1p coin is worth ___ penny/pence.',
            options: [
              { id: 'a', text: '1' },
              { id: 'b', text: '5' },
              { id: 'c', text: '10' },
            ],
            correctAnswer: 'a',
            explanation: 'A 1p coin is worth 1 penny. It\'s the smallest amount of money you can have in a coin!',
          },
          medium: {
            question: 'The famous author on the UK £10 note is Jane ___.',
            options: [
              { id: 'a', text: 'Eyre' },
              { id: 'b', text: 'Austen' },
              { id: 'c', text: 'Seymour' },
            ],
            correctAnswer: 'b',
            explanation: 'Jane Austen is on the £10 note. She was a beloved English novelist who wrote Pride and Prejudice and Sense and Sensibility!',
          },
          hard: {
            question: 'The largest denomination of Bank of England currency in general circulation today is the £___ note.',
            options: [
              { id: 'a', text: '50' },
              { id: 'b', text: '100' },
              { id: 'c', text: '500' },
            ],
            correctAnswer: 'a',
            explanation: 'The £50 note is the largest denomination in general circulation. It features Alan Turing, the pioneering mathematician and computer scientist.',
          },
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Lesson 2: Counting Money
  // ─────────────────────────────────────────────
  {
    id: 'money-basics-2',
    trackId: 'money-basics',
    index: 2,
    title: 'Counting Money',
    description: 'Learn how to count and add money together',
    xpReward: 20,
    screens: [
      {
        type: 'content',
        title: 'Counting Coins',
        body: 'Counting money is an important skill for any monster trainer! When you count coins, start with the biggest coins first. Count £2 coins first, then £1, then 50p, 20p, 10p, 5p, 2p, and finally 1p coins. For example, if you have a £1 coin, a 20p coin, and two 2p coins, you would count: 100, 120, 122, 124. That\'s £1.24! When you reach 100 pence, that equals one pound.',
      },
      {
        type: 'multiple-choice',
        variants: {
          easy: {
            question: 'If you have two 50p coins, how much money do you have?',
            options: [
              { id: 'a', text: '50p' },
              { id: 'b', text: '£1.00' },
              { id: 'c', text: '£1.50' },
            ],
            correctAnswer: 'b',
            explanation: 'Each 50p coin is worth 50 pence. Two 50p coins are 50 + 50 = 100 pence = £1.00!',
          },
          medium: {
            question: 'You have a £1 coin, two 20p coins, and a 10p coin. How much money is that?',
            options: [
              { id: 'a', text: '£1.30' },
              { id: 'b', text: '£1.50' },
              { id: 'c', text: '£1.40' },
            ],
            correctAnswer: 'b',
            explanation: '£1 = 100p, two 20p coins = 40p, one 10p coin = 10p. Total: 100 + 40 + 10 = 150p = £1.50!',
          },
          hard: {
            question: 'You buy a snack for £3.47 and pay with a £5 note. How much change should you receive?',
            options: [
              { id: 'a', text: '£1.47' },
              { id: 'b', text: '£1.53' },
              { id: 'c', text: '£2.53' },
            ],
            correctAnswer: 'b',
            explanation: '£5.00 - £3.47 = £1.53. You can calculate this by subtracting: £5.00 - £3.00 = £2.00, then £2.00 - £0.47 = £1.53.',
          },
        },
      },
      {
        type: 'content',
        title: 'Pounds and Pence',
        body: 'When we write money amounts, we use a pound sign (£) and a decimal point. The numbers before the decimal point are pounds, and the numbers after are pence. So £1.50 means 1 pound and 50 pence. Remember, 100 pence equals 1 pound! When you\'re counting notes, it\'s just like counting by fives, tens, twenties, or fifties. If you have a £10 note and a £5 note, you have £15 total. Always double-check your counting to make sure you have the right amount -- your Money Monster will thank you!',
      },
      {
        type: 'fill-blank',
        variants: {
          easy: {
            question: '100 pence is the same as ___ pound(s).',
            options: [
              { id: 'a', text: '1' },
              { id: 'b', text: '5' },
              { id: 'c', text: '10' },
            ],
            correctAnswer: 'a',
            explanation: '100 pence equals exactly 1 pound. When you have 100 pennies, you can trade them for a £1 coin!',
          },
          medium: {
            question: 'If you have a £10 note and a £5 note, you have £___ in total.',
            options: [
              { id: 'a', text: '10' },
              { id: 'b', text: '15' },
              { id: 'c', text: '50' },
            ],
            correctAnswer: 'b',
            explanation: '£10 + £5 = £15. When adding notes, just add the pound amounts together!',
          },
          hard: {
            question: 'If an item costs £7.89 and you have £10.00, you will receive £___ in change.',
            options: [
              { id: 'a', text: '2.11' },
              { id: 'b', text: '2.21' },
              { id: 'c', text: '3.11' },
            ],
            correctAnswer: 'a',
            explanation: '£10.00 - £7.89 = £2.11. Subtract the pence first: 100 - 89 = 11 pence, then the pounds: 9 - 7 = 2 pounds, giving you £2.11.',
          },
        },
      },
      {
        type: 'true-false',
        variants: {
          easy: {
            question: 'Two 50p coins make one pound.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'Yes! 2 x 50p = 100p = £1.',
          },
          medium: {
            question: 'Three 10p coins and two 5p coins equal the same as a 50p coin.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'Three 10p coins = 30p, and two 5p coins = 10p, for a total of 40p. A 50p coin = 50p. 40p does not equal 50p.',
          },
          hard: {
            question: 'If you invest £100 at a 10% annual interest rate, you will have exactly £110 after one year (assuming simple interest).',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'With simple interest, you earn 10% of £100 = £10 in one year. So your total is £100 + £10 = £110. Compound interest would give slightly more, but with simple interest the answer is exactly £110.',
          },
        },
      },
      {
        type: 'tap-match',
        variants: {
          easy: {
            question: 'Match the coins to the right amount!',
            matchPairs: [
              { left: 'Two 1p coins', right: '2 pence' },
              { left: 'One 5p coin', right: '5 pence' },
              { left: 'One 50p coin', right: '50 pence' },
            ],
            explanation: 'Two 1p coins = 2 pence, one 5p coin = 5 pence, and one 50p coin = 50 pence. Great counting!',
          },
          medium: {
            question: 'Match each coin combination to its total value.',
            matchPairs: [
              { left: 'Two 50p coins', right: '£1.00' },
              { left: 'Ten 10p coins', right: '£1.00' },
              { left: 'Five 20p coins', right: '£1.00' },
              { left: 'One hundred 1p coins', right: '£1.00' },
            ],
            explanation: 'There are many ways to make a pound! Two 50p coins, ten 10p coins, five 20p coins, or one hundred 1p coins all equal £1.00.',
          },
          hard: {
            question: 'Match the purchase scenario to the correct change received from a £20 note.',
            matchPairs: [
              { left: 'Item costs £12.50', right: '£7.50 change' },
              { left: 'Item costs £15.75', right: '£4.25 change' },
              { left: 'Item costs £8.33', right: '£11.67 change' },
              { left: 'Item costs £19.01', right: '£0.99 change' },
            ],
            explanation: 'To find change, subtract the cost from £20.00. Practice making change quickly -- it\'s a valuable real-world maths skill!',
          },
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Lesson 3: Where Does Money Come From?
  // ─────────────────────────────────────────────
  {
    id: 'money-basics-3',
    trackId: 'money-basics',
    index: 3,
    title: 'Where Does Money Come From?',
    description: 'Learn about mints, banks, and how people earn money',
    xpReward: 20,
    screens: [
      {
        type: 'content',
        title: 'How Money is Made',
        body: 'Have you ever wondered where money comes from? Coins are made at a special factory called the Royal Mint, which is based in Wales. The Royal Mint makes billions of coins every year! Polymer notes are printed by the Bank of England. These places use special machines, metals, and polymer materials to create money. But they can\'t just print as much as they want -- the government carefully decides how much new money to make so it keeps its value.',
      },
      {
        type: 'multiple-choice',
        variants: {
          easy: {
            question: 'Where are coins made?',
            options: [
              { id: 'a', text: 'At a supermarket' },
              { id: 'b', text: 'At the Royal Mint' },
              { id: 'c', text: 'At a school' },
            ],
            correctAnswer: 'b',
            explanation: 'Coins are made at the Royal Mint! It\'s a special factory in Wales that makes all the coins we use.',
          },
          medium: {
            question: 'Which institution is responsible for printing UK banknotes in England?',
            options: [
              { id: 'a', text: 'HM Treasury' },
              { id: 'b', text: 'The Bank of England' },
              { id: 'c', text: 'The Royal Mint' },
            ],
            correctAnswer: 'b',
            explanation: 'The Bank of England prints and issues banknotes in England and Wales. The Royal Mint makes coins, and HM Treasury manages the government\'s finances.',
          },
          hard: {
            question: 'What could happen if a government prints too much money without increasing the production of goods and services?',
            options: [
              { id: 'a', text: 'Everyone becomes richer' },
              { id: 'b', text: 'Inflation occurs, meaning prices rise and money loses purchasing power' },
              { id: 'c', text: 'The extra money disappears from the economy' },
            ],
            correctAnswer: 'b',
            explanation: 'Printing too much money causes inflation. When there\'s more money chasing the same amount of goods, prices go up. This is why the Bank of England carefully controls the money supply.',
          },
        },
      },
      {
        type: 'content',
        title: 'Earning Money',
        body: 'Most people earn money by working at a job. When grown-ups go to work, they get paid for their time and skills. Kids can earn money too -- by doing chores for pocket money, helping neighbours, or even running a stall at a car boot sale! Banks are special places that keep money safe. When you put money in a bank, it\'s called making a deposit. The bank even pays you a little extra money called interest as a thank-you for keeping your money there. Even your Money Monster knows it\'s smart to save!',
      },
      {
        type: 'true-false',
        variants: {
          easy: {
            question: 'People earn money by going to work.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'Yes! Most people earn money by working at a job. They trade their time and skills for money.',
          },
          medium: {
            question: 'Banks pay you interest when you deposit money, because they use your money to make loans to other people.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'Correct! Banks lend your deposited money to others (like for home mortgages) and charge those borrowers interest. They share a portion of that interest with you as a reward for depositing.',
          },
          hard: {
            question: 'The Bank of England is a private company that operates independently from the UK government with no government oversight.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'The Bank of England has a unique structure -- it is operationally independent in setting monetary policy, but it was nationalised in 1946 and operates within the government framework. Its Governor is appointed by the Crown on the advice of the Prime Minister, and it is accountable to Parliament.',
          },
        },
      },
      {
        type: 'fill-blank',
        variants: {
          easy: {
            question: 'When you put money in a bank, it is called making a ___.',
            options: [
              { id: 'a', text: 'deposit' },
              { id: 'b', text: 'dessert' },
              { id: 'c', text: 'drawing' },
            ],
            correctAnswer: 'a',
            explanation: 'Putting money into a bank is called making a deposit. The bank keeps your money safe for you!',
          },
          medium: {
            question: 'The extra money a bank pays you for keeping your savings with them is called ___.',
            options: [
              { id: 'a', text: 'a fee' },
              { id: 'b', text: 'interest' },
              { id: 'c', text: 'a tax' },
            ],
            correctAnswer: 'b',
            explanation: 'Interest is the extra money a bank pays you for keeping your savings there. It\'s like a reward for trusting the bank with your money!',
          },
          hard: {
            question: 'The central bank of the United Kingdom, which manages monetary policy and the money supply, is called the Bank of ___.',
            options: [
              { id: 'a', text: 'England' },
              { id: 'b', text: 'Britain' },
              { id: 'c', text: 'London' },
            ],
            correctAnswer: 'a',
            explanation: 'The Bank of England is the central bank of the United Kingdom. It sets interest rates, manages the money supply, and works to keep the economy stable.',
          },
        },
      },
      {
        type: 'tap-match',
        variants: {
          easy: {
            question: 'Match each place to what it does with money!',
            matchPairs: [
              { left: 'Royal Mint', right: 'Makes coins' },
              { left: 'Bank', right: 'Keeps money safe' },
              { left: 'Shop', right: 'Where you spend money' },
            ],
            explanation: 'The Royal Mint makes coins, banks keep money safe, and shops are where you spend money to buy things!',
          },
          medium: {
            question: 'Match each money term to its meaning.',
            matchPairs: [
              { left: 'Deposit', right: 'Put money into a bank' },
              { left: 'Withdrawal', right: 'Take money out of a bank' },
              { left: 'Interest', right: 'Extra money the bank pays you' },
              { left: 'Income', right: 'Money you earn from work' },
            ],
            explanation: 'A deposit puts money in, a withdrawal takes it out, interest is the bank\'s payment to you, and income is what you earn.',
          },
          hard: {
            question: 'Match each institution to its primary role in the UK monetary system.',
            matchPairs: [
              { left: 'Bank of England', right: 'Sets monetary policy and prints notes' },
              { left: 'Royal Mint', right: 'Produces coins' },
              { left: 'HM Treasury', right: 'Manages government finances' },
              { left: 'FCA', right: 'Regulates financial services' },
            ],
            explanation: 'Each institution plays a distinct role: the Bank of England sets monetary policy and prints notes, the Royal Mint makes coins, HM Treasury oversees government spending and revenue, and the FCA (Financial Conduct Authority) regulates financial services firms.',
          },
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Lesson 4: Needs vs Wants
  // ─────────────────────────────────────────────
  {
    id: 'money-basics-4',
    trackId: 'money-basics',
    index: 4,
    title: 'Needs vs Wants',
    description: 'Learn the difference between needs and wants',
    xpReward: 20,
    screens: [
      {
        type: 'content',
        title: 'What Are Needs?',
        body: 'Needs are things you must have to survive and stay healthy. Food, water, a place to live, and clothes to wear are all needs. Without these things, life would be very hard and even dangerous. When families decide how to spend their money, needs always come first! For example, buying groceries at Tesco and paying the rent are needs. It\'s important to make sure all your needs are taken care of before spending money on other things.',
      },
      {
        type: 'multiple-choice',
        variants: {
          easy: {
            question: 'Which of these is a NEED?',
            options: [
              { id: 'a', text: 'A toy robot' },
              { id: 'b', text: 'Food to eat' },
              { id: 'c', text: 'A video game' },
            ],
            correctAnswer: 'b',
            explanation: 'Food is a need because you must eat to stay alive and healthy. Toy robots and video games are fun, but they are wants!',
          },
          medium: {
            question: 'Which of the following is the best example of a need?',
            options: [
              { id: 'a', text: 'A brand-new bicycle' },
              { id: 'b', text: 'Shelter to live in' },
              { id: 'c', text: 'Concert tickets' },
            ],
            correctAnswer: 'b',
            explanation: 'Shelter is a basic human need -- everyone needs a safe place to live. A bicycle and concert tickets are wants, even though they can be nice to have.',
          },
          hard: {
            question: 'Which scenario best demonstrates the economic concept of "opportunity cost" when choosing between a need and a want?',
            options: [
              { id: 'a', text: 'Buying both groceries and a new game because you have enough money' },
              { id: 'b', text: 'Choosing to buy winter boots instead of concert tickets, giving up the concert experience' },
              { id: 'c', text: 'Receiving a gift card so you don\'t have to make a choice' },
            ],
            correctAnswer: 'b',
            explanation: 'Opportunity cost is what you give up when you make a choice. By choosing winter boots (a need), you give up the concert (a want). Understanding opportunity cost helps us make smarter financial decisions.',
          },
        },
      },
      {
        type: 'content',
        title: 'What Are Wants?',
        body: 'Wants are things that are nice to have but you don\'t need them to survive. Toys, sweets, video games, and cinema tickets are all wants. There\'s nothing wrong with wanting things -- wants make life fun! But smart money managers know to take care of needs first and then spend some pocket money on wants. A good trick is to wait a day or two before buying a want. If you still really want it after waiting, then it might be a good purchase. This is called "thinking before spending" -- and it\'s a skill every good monster trainer should master!',
      },
      {
        type: 'tap-match',
        variants: {
          easy: {
            question: 'Sort these into needs and wants!',
            matchPairs: [
              { left: 'Water', right: 'Need' },
              { left: 'Sweets', right: 'Want' },
              { left: 'Warm coat', right: 'Need' },
              { left: 'Toy car', right: 'Want' },
            ],
            explanation: 'Water and a warm coat are needs because you need them to stay healthy. Sweets and a toy car are wants because they\'re fun but not necessary!',
          },
          medium: {
            question: 'Match each item to whether it is a need or a want.',
            matchPairs: [
              { left: 'Rent payment', right: 'Need' },
              { left: 'Streaming subscription', right: 'Want' },
              { left: 'Healthy groceries', right: 'Need' },
              { left: 'Designer trainers', right: 'Want' },
              { left: 'Medicine', right: 'Need' },
            ],
            explanation: 'Rent, groceries, and medicine are needs -- you must have them. Streaming services and designer trainers are wants -- nice to have, but not essential.',
          },
          hard: {
            question: 'Match each budgeting strategy to its description.',
            matchPairs: [
              { left: '50/30/20 rule', right: '50% needs, 30% wants, 20% savings' },
              { left: 'Pay yourself first', right: 'Save before spending on anything else' },
              { left: 'Envelope method', right: 'Divide cash into category envelopes' },
              { left: 'Zero-based budget', right: 'Every pound is assigned a purpose' },
            ],
            explanation: 'These are all popular budgeting strategies. The 50/30/20 rule splits income by category, "pay yourself first" prioritises saving, the envelope method uses physical cash limits, and zero-based budgeting assigns every pound a job.',
          },
        },
      },
      {
        type: 'true-false',
        variants: {
          easy: {
            question: 'A video game is a need.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'A video game is a want, not a need. It\'s fun to play, but you don\'t need it to survive!',
          },
          medium: {
            question: 'It\'s a good idea to wait before buying something you want to see if you still want it later.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'Yes! Waiting before buying helps you avoid impulse purchases. If you still want something after a day or two, it\'s more likely to be a good purchase.',
          },
          hard: {
            question: 'According to Maslow\'s hierarchy of needs, once basic survival needs are met, people seek safety, belonging, esteem, and self-actualization in that order.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'Correct! Maslow\'s hierarchy suggests people prioritise needs in levels: physiological needs first (food, water, shelter), then safety, love and belonging, esteem, and finally self-actualisation. This framework helps explain why we handle needs before wants.',
          },
        },
      },
      {
        type: 'fill-blank',
        variants: {
          easy: {
            question: 'Things you must have to live, like food and water, are called ___.',
            options: [
              { id: 'a', text: 'needs' },
              { id: 'b', text: 'wants' },
              { id: 'c', text: 'gifts' },
            ],
            correctAnswer: 'a',
            explanation: 'Things you must have to live are called needs. Food, water, shelter, and clothing are all needs!',
          },
          medium: {
            question: 'Smart spenders take care of their ___ before spending money on wants.',
            options: [
              { id: 'a', text: 'hobbies' },
              { id: 'b', text: 'needs' },
              { id: 'c', text: 'collections' },
            ],
            correctAnswer: 'b',
            explanation: 'Needs should always come first! Make sure essentials like food, shelter, and bills are covered before spending on wants.',
          },
          hard: {
            question: 'The ___ cost of a purchase is the value of the next best alternative you give up by choosing that purchase.',
            options: [
              { id: 'a', text: 'opportunity' },
              { id: 'b', text: 'retail' },
              { id: 'c', text: 'wholesale' },
            ],
            correctAnswer: 'a',
            explanation: 'Opportunity cost is a key economics concept. Every choice has a cost -- not just the money you spend, but also what you could have done with that money instead. Understanding this helps you make better financial decisions.',
          },
        },
      },
    ],
  },
];
