import { Lesson } from '@/types';

export const savingBudgetingLessons: Lesson[] = [
  // ─── LESSON 0: Why Save Money? ───────────────────────────────────────
  {
    id: 'saving-budgeting-0',
    trackId: 'saving-budgeting',
    index: 0,
    title: 'Why Save Money?',
    description: 'Learn why putting money aside is one of the smartest things you can do.',
    xpReward: 20,
    screens: [
      // Screen 1 — Content
      {
        type: 'content',
        title: 'What Does It Mean to Save?',
        body: 'Saving money means keeping some of the money you get instead of spending it all right away. When you save, you put money in a safe place — like a money jar or a savings account — so you can use it later.\n\nImagine you receive £10 for your birthday. You could spend it all on sweets today, or you could save some of it. If you save £5 every week, after a few weeks you might have enough to buy something really special, like a toy or a book you have been wanting!',
      },
      // Screen 2 — Multiple Choice
      {
        type: 'multiple-choice',
        variants: {
          easy: {
            question: 'What does saving money mean?',
            options: [
              { id: 'a', text: 'Keeping some money to use later' },
              { id: 'b', text: 'Spending all your money right away' },
              { id: 'c', text: 'Giving all your money to a friend' },
            ],
            correctAnswer: 'a',
            explanation: 'Saving money means keeping some of it in a safe place so you can use it later!',
          },
          medium: {
            question: 'Which of the following best describes the purpose of saving money?',
            options: [
              { id: 'a', text: 'To impress your friends with how much you have' },
              { id: 'b', text: 'To set money aside now so you can afford things in the future' },
              { id: 'c', text: 'To avoid ever spending money on anything' },
            ],
            correctAnswer: 'b',
            explanation: 'Saving is about setting money aside today so you have it available when you need or want something in the future.',
          },
          hard: {
            question: 'Why is saving considered a key habit for long-term financial health?',
            options: [
              { id: 'a', text: 'It guarantees you will become wealthy overnight' },
              { id: 'b', text: 'It builds a financial cushion that protects you from unexpected expenses and lets you reach bigger goals' },
              { id: 'c', text: 'It means you never have to work again' },
            ],
            correctAnswer: 'b',
            explanation: 'Saving builds a financial cushion. It protects you from surprises like a broken bike or an unexpected trip, and it helps you reach larger goals over time.',
          },
        },
      },
      // Screen 3 — Content
      {
        type: 'content',
        title: 'Why Is Saving Important?',
        body: 'Saving is important for three big reasons:\n\n1. You can buy bigger things. Small amounts add up! Saving a little each week can help you afford something you really want.\n\n2. You are prepared for surprises. Sometimes unexpected things happen — maybe your bike tyre pops or you need supplies for a school project. Having savings means you are ready.\n\n3. It feels great! Watching your savings grow gives you a sense of accomplishment and confidence about money.',
      },
      // Screen 4 — True/False
      {
        type: 'true-false',
        variants: {
          easy: {
            question: 'Saving money can help you buy bigger things.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'Yes! When you save a little bit over time, it adds up and you can buy bigger, more exciting things.',
          },
          medium: {
            question: 'You should only start saving money when you are an adult.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'False! You can start saving at any age. The earlier you start, the better your saving habits will be.',
          },
          hard: {
            question: 'An emergency fund is an example of saving money for unexpected expenses.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'True! An emergency fund is money set aside specifically for unexpected costs, like urgent repairs or surprise bills.',
          },
        },
      },
      // Screen 5 — Tap Match
      {
        type: 'tap-match',
        variants: {
          easy: {
            question: 'Match each idea with the correct description.',
            matchPairs: [
              { left: 'Saving', right: 'Keeping money for later' },
              { left: 'Spending', right: 'Using money to buy something now' },
              { left: 'Money jar', right: 'A place to store your coins' },
            ],
            correctAnswer: 'all',
            explanation: 'Saving means keeping money for later, spending means buying something now, and a money jar is a safe place to keep your coins!',
          },
          medium: {
            question: 'Match each saving benefit with its example.',
            matchPairs: [
              { left: 'Buy bigger things', right: 'Save up for a new video game' },
              { left: 'Be prepared', right: 'Have money when your shoe rips' },
              { left: 'Feel confident', right: 'Know you have money if you need it' },
            ],
            correctAnswer: 'all',
            explanation: 'Saving lets you afford bigger purchases, prepares you for surprises, and gives you confidence about your finances.',
          },
          hard: {
            question: 'Match each financial concept with its definition.',
            matchPairs: [
              { left: 'Emergency fund', right: 'Money reserved for unexpected costs' },
              { left: 'Savings account', right: 'A bank account that earns interest on deposits' },
              { left: 'Compound interest', right: 'Earning interest on both savings and past interest' },
            ],
            correctAnswer: 'all',
            explanation: 'An emergency fund covers surprises, a savings account earns interest at a bank, and compound interest means your interest earns even more interest over time.',
          },
        },
      },
      // Screen 6 — Fill in the Blank
      {
        type: 'fill-blank',
        variants: {
          easy: {
            question: 'When you save money, you keep it in a safe ___ like a money jar.',
            options: [
              { id: 'a', text: 'place' },
              { id: 'b', text: 'pocket' },
              { id: 'c', text: 'shop' },
            ],
            correctAnswer: 'a',
            explanation: 'You keep your savings in a safe place, like a money jar or a tin at home!',
          },
          medium: {
            question: 'Saving a little bit of money each week helps it ___ over time.',
            options: [
              { id: 'a', text: 'disappear' },
              { id: 'b', text: 'add up' },
              { id: 'c', text: 'shrink' },
            ],
            correctAnswer: 'b',
            explanation: 'Small amounts add up over time. Even saving a little each week can turn into a big amount!',
          },
          hard: {
            question: 'Financial experts often recommend keeping three to six months of ___ in an emergency fund.',
            options: [
              { id: 'a', text: 'pocket money' },
              { id: 'b', text: 'expenses' },
              { id: 'c', text: 'profits' },
            ],
            correctAnswer: 'b',
            explanation: 'Experts suggest saving three to six months of living expenses in an emergency fund so you are prepared for unexpected situations.',
          },
        },
      },
    ],
  },

  // ─── LESSON 1: Setting Savings Goals ─────────────────────────────────
  {
    id: 'saving-budgeting-1',
    trackId: 'saving-budgeting',
    index: 1,
    title: 'Setting Savings Goals',
    description: 'Discover how to set short-term and long-term savings goals so you always have something to work toward.',
    xpReward: 20,
    screens: [
      // Screen 1 — Content
      {
        type: 'content',
        title: 'What Is a Savings Goal?',
        body: 'A savings goal is something specific you want to save your money for. It gives your saving a purpose!\n\nThere are two main kinds of savings goals:\n\n- Short-term goals are things you can save for quickly, like a new book, a toy, or a treat. These usually take a few days or weeks.\n\n- Long-term goals take more time and patience, like saving for a bicycle, a tablet, or even university. These might take months or years.\n\nHaving a goal makes saving feel exciting instead of boring because you know exactly what you are working toward!',
      },
      // Screen 2 — True/False
      {
        type: 'true-false',
        variants: {
          easy: {
            question: 'A savings goal is something you want to save money for.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'Correct! A savings goal is the thing you want to buy or do with the money you save.',
          },
          medium: {
            question: 'A long-term savings goal is something you can buy tomorrow.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'False! Long-term goals take weeks, months, or even years to reach. Short-term goals are the ones you can reach quickly.',
          },
          hard: {
            question: 'Breaking a large savings goal into smaller milestones can help you stay motivated.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'True! Milestones make a big goal feel manageable. Celebrating small wins along the way keeps you motivated to keep saving.',
          },
        },
      },
      // Screen 3 — Content
      {
        type: 'content',
        title: 'How to Set a Good Savings Goal',
        body: 'Follow these steps to set a great savings goal:\n\n1. Pick something you really want. It could be a toy, a trip, or money for a rainy day.\n\n2. Find out how much it costs. Look up the price or ask an adult.\n\n3. Decide how much you can save each week. Even a small amount counts!\n\n4. Calculate how long it will take. Divide the total price by how much you save each week.\n\nExample: You want a £20 book. You save £4 per week. £20 divided by £4 = 5 weeks. In just over a month you will have enough!',
      },
      // Screen 4 — Multiple Choice
      {
        type: 'multiple-choice',
        variants: {
          easy: {
            question: 'If you save £2 every week, how many weeks will it take to save £10?',
            options: [
              { id: 'a', text: '3 weeks' },
              { id: 'b', text: '5 weeks' },
              { id: 'c', text: '10 weeks' },
            ],
            correctAnswer: 'b',
            explanation: '£10 divided by £2 per week = 5 weeks. Great job!',
          },
          medium: {
            question: 'You want to buy a £30 game. You save £5 per week. How many weeks until you reach your goal?',
            options: [
              { id: 'a', text: '4 weeks' },
              { id: 'b', text: '5 weeks' },
              { id: 'c', text: '6 weeks' },
            ],
            correctAnswer: 'c',
            explanation: '£30 divided by £5 per week = 6 weeks. Setting a timeline helps you stay on track!',
          },
          hard: {
            question: 'You want to save £500 for a new laptop. You earn £40 per week from chores and can save 50% of your earnings. How many weeks will it take?',
            options: [
              { id: 'a', text: '20 weeks' },
              { id: 'b', text: '25 weeks' },
              { id: 'c', text: '13 weeks' },
            ],
            correctAnswer: 'b',
            explanation: '50% of £40 is £20 saved per week. £500 divided by £20 = 25 weeks. Planning ahead makes big goals achievable!',
          },
        },
      },
      // Screen 5 — Fill in the Blank
      {
        type: 'fill-blank',
        variants: {
          easy: {
            question: 'A short-term goal is something you can save for in a few days or ___.',
            options: [
              { id: 'a', text: 'years' },
              { id: 'b', text: 'weeks' },
              { id: 'c', text: 'centuries' },
            ],
            correctAnswer: 'b',
            explanation: 'Short-term goals usually take days or weeks to reach — like saving for a small toy or a treat.',
          },
          medium: {
            question: 'To find out how long it takes to save, divide the total ___ by how much you save each week.',
            options: [
              { id: 'a', text: 'cost' },
              { id: 'b', text: 'weight' },
              { id: 'c', text: 'colour' },
            ],
            correctAnswer: 'a',
            explanation: 'Divide the total cost by your weekly savings amount to figure out how many weeks you need to save.',
          },
          hard: {
            question: 'A SMART savings goal is Specific, Measurable, Achievable, Relevant, and ___.',
            options: [
              { id: 'a', text: 'Terrific' },
              { id: 'b', text: 'Time-bound' },
              { id: 'c', text: 'Tricky' },
            ],
            correctAnswer: 'b',
            explanation: 'SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound. The deadline keeps you focused and motivated.',
          },
        },
      },
      // Screen 6 — Tap Match
      {
        type: 'tap-match',
        variants: {
          easy: {
            question: 'Match each goal with how long it takes.',
            matchPairs: [
              { left: 'Chocolate bar', right: 'Short-term (days)' },
              { left: 'New toy', right: 'Short-term (weeks)' },
              { left: 'Bicycle', right: 'Long-term (months)' },
            ],
            correctAnswer: 'all',
            explanation: 'A chocolate bar is a quick save, a toy takes a few weeks, and a bicycle is a long-term goal that takes months!',
          },
          medium: {
            question: 'Match each savings goal with its type.',
            matchPairs: [
              { left: 'Cinema ticket (£12)', right: 'Short-term goal' },
              { left: 'New phone (£200)', right: 'Long-term goal' },
              { left: 'Snack (£3)', right: 'Short-term goal' },
              { left: 'Summer camp (£500)', right: 'Long-term goal' },
            ],
            correctAnswer: 'all',
            explanation: 'Cheap items you can get soon are short-term goals. Expensive items that take months of saving are long-term goals.',
          },
          hard: {
            question: 'Match each step of goal-setting with its action.',
            matchPairs: [
              { left: 'Step 1: Identify', right: 'Choose what you want to save for' },
              { left: 'Step 2: Research', right: 'Find out the total cost' },
              { left: 'Step 3: Plan', right: 'Decide how much to save weekly' },
              { left: 'Step 4: Calculate', right: 'Divide cost by weekly savings' },
            ],
            correctAnswer: 'all',
            explanation: 'Good goal-setting follows a clear process: identify your goal, research the cost, plan your weekly savings, and calculate the timeline.',
          },
        },
      },
    ],
  },

  // ─── LESSON 2: Making a Budget ───────────────────────────────────────
  {
    id: 'saving-budgeting-2',
    trackId: 'saving-budgeting',
    index: 2,
    title: 'Making a Budget',
    description: 'Learn what a budget is and how to create a simple plan for your money.',
    xpReward: 20,
    screens: [
      // Screen 1 — Content
      {
        type: 'content',
        title: 'What Is a Budget?',
        body: 'A budget is a plan for how you will use your money. It helps you decide how much to spend, how much to save, and how much to share.\n\nThink of a budget like a road map for your money. Without a map, you might get lost. Without a budget, your money might disappear before you know it!\n\nEven kids can make a budget. If you get £10 a week in pocket money, you could plan to spend £5, save £4, and donate £1. That way every pound has a job.',
      },
      // Screen 2 — Multiple Choice
      {
        type: 'multiple-choice',
        variants: {
          easy: {
            question: 'What is a budget?',
            options: [
              { id: 'a', text: 'A plan for how to use your money' },
              { id: 'b', text: 'A type of money jar' },
              { id: 'c', text: 'A game you play with coins' },
            ],
            correctAnswer: 'a',
            explanation: 'A budget is a plan that tells your money where to go so you can spend, save, and share wisely.',
          },
          medium: {
            question: 'Why is a budget compared to a road map?',
            options: [
              { id: 'a', text: 'Because budgets are made of paper' },
              { id: 'b', text: 'Because it guides your money so it does not disappear without a plan' },
              { id: 'c', text: 'Because both are found in a car' },
            ],
            correctAnswer: 'b',
            explanation: 'Just like a road map guides you to your destination, a budget guides your money so every pound has a purpose.',
          },
          hard: {
            question: 'Which budgeting principle divides after-tax income into needs, wants, and savings?',
            options: [
              { id: 'a', text: 'The 50/30/20 rule' },
              { id: 'b', text: 'The 80/20 rule' },
              { id: 'c', text: 'The 100% spending rule' },
            ],
            correctAnswer: 'a',
            explanation: 'The 50/30/20 rule suggests spending 50% on needs, 30% on wants, and saving 20%. It is a popular framework for personal budgeting.',
          },
        },
      },
      // Screen 3 — Content
      {
        type: 'content',
        title: 'How to Make a Simple Budget',
        body: 'Making a budget is easy! Follow these steps:\n\n1. Know your income. How much money do you get each week or month? This could be pocket money, birthday money, or money from chores.\n\n2. List your spending. Write down what you usually spend money on — snacks, toys, games, gifts for friends.\n\n3. Set your savings goal. Decide how much you want to save and for what.\n\n4. Make the plan. Divide your money into three buckets:\n   - Spend: money for things you need or want now.\n   - Save: money for your savings goal.\n   - Share: money you give to others or donate.\n\n5. Track your spending. Write down what you spend each day to see if you are sticking to your budget.',
      },
      // Screen 4 — True/False
      {
        type: 'true-false',
        variants: {
          easy: {
            question: 'A budget helps you know where your money goes.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'True! A budget is like a tracker that shows you exactly where your money is going.',
          },
          medium: {
            question: 'Once you make a budget, you should never change it.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'False! Budgets should be flexible. If something changes — like you earn more or have a new expense — you can update your budget.',
          },
          hard: {
            question: 'Tracking expenses is unnecessary if you already have a budget written down.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'False! Writing a budget is only the first step. Tracking your actual spending is essential to make sure you stick to the plan and can adjust when needed.',
          },
        },
      },
      // Screen 5 — Tap Match
      {
        type: 'tap-match',
        variants: {
          easy: {
            question: 'Match each budget bucket with an example.',
            matchPairs: [
              { left: 'Spend', right: 'Buying a snack' },
              { left: 'Save', right: 'Putting money in a money jar' },
              { left: 'Share', right: 'Giving to a charity' },
            ],
            correctAnswer: 'all',
            explanation: 'Spending is for things you buy now, saving is for the future, and sharing is for helping others!',
          },
          medium: {
            question: 'Match each budgeting step to its description.',
            matchPairs: [
              { left: 'Know your income', right: 'Figure out how much money you receive' },
              { left: 'List your spending', right: 'Write down what you buy' },
              { left: 'Set a savings goal', right: 'Decide how much to save and why' },
              { left: 'Track spending', right: 'Record daily purchases' },
            ],
            correctAnswer: 'all',
            explanation: 'Each step builds on the last to create a complete budget that helps you manage your money.',
          },
          hard: {
            question: 'Match each budgeting method with its description.',
            matchPairs: [
              { left: 'Envelope method', right: 'Put cash into labelled envelopes for each category' },
              { left: '50/30/20 rule', right: 'Allocate 50% needs, 30% wants, 20% savings' },
              { left: 'Zero-based budget', right: 'Every pound is assigned a purpose until income minus expenses equals zero' },
            ],
            correctAnswer: 'all',
            explanation: 'Different budgeting methods work for different people. The envelope method uses physical cash, the 50/30/20 rule uses percentages, and zero-based budgeting assigns every pound a job.',
          },
        },
      },
      // Screen 6 — Fill in the Blank
      {
        type: 'fill-blank',
        variants: {
          easy: {
            question: 'A budget is a ___ for your money.',
            options: [
              { id: 'a', text: 'plan' },
              { id: 'b', text: 'toy' },
              { id: 'c', text: 'song' },
            ],
            correctAnswer: 'a',
            explanation: 'A budget is a plan that helps you decide how to use your money wisely!',
          },
          medium: {
            question: 'The three main budget buckets are spend, save, and ___.',
            options: [
              { id: 'a', text: 'hide' },
              { id: 'b', text: 'share' },
              { id: 'c', text: 'forget' },
            ],
            correctAnswer: 'b',
            explanation: 'The three buckets are spend, save, and share. Sharing means donating or giving money to help others.',
          },
          hard: {
            question: 'In a zero-based budget, your income minus all planned ___ equals zero.',
            options: [
              { id: 'a', text: 'expenses' },
              { id: 'b', text: 'friends' },
              { id: 'c', text: 'hobbies' },
            ],
            correctAnswer: 'a',
            explanation: 'In a zero-based budget, every pound of income is assigned to an expense or savings category so that income minus expenses equals exactly zero.',
          },
        },
      },
    ],
  },

  // ─── LESSON 3: Spending vs Saving ────────────────────────────────────
  {
    id: 'saving-budgeting-3',
    trackId: 'saving-budgeting',
    index: 3,
    title: 'Spending vs Saving',
    description: 'Understand the trade-offs between spending now and saving for later.',
    xpReward: 20,
    screens: [
      // Screen 1 — Content
      {
        type: 'content',
        title: 'The Big Trade-Off',
        body: 'Every time you get money, you face a choice: spend it now or save it for later. This is called a trade-off.\n\nWhen you spend money, you get something right away — like a chocolate bar or a sticker. That feels good in the moment!\n\nWhen you save money, you wait. You do not get something right now, but later you can afford something bigger and better.\n\nThe trick is finding the right balance. You do not have to save every single penny, and you do not have to spend it all either. Smart money managers do both!',
      },
      // Screen 2 — True/False
      {
        type: 'true-false',
        variants: {
          easy: {
            question: 'A trade-off means choosing between two things.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'Correct! A trade-off is when you pick one option and give up another. Spending vs saving is one of the biggest trade-offs with money.',
          },
          medium: {
            question: 'You should always save your money and never spend any of it.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'False! A good money plan includes both spending and saving. The key is to find a healthy balance.',
          },
          hard: {
            question: 'Opportunity cost is what you give up when you choose one option over another.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'True! Opportunity cost is an economics term for the value of the next best option you did not choose. If you spend £10 on a toy, the opportunity cost is what else you could have done with that £10.',
          },
        },
      },
      // Screen 3 — Content
      {
        type: 'content',
        title: 'Needs vs Wants',
        body: 'To make good spending and saving decisions, it helps to know the difference between needs and wants.\n\nNeeds are things you must have to live — food, water, shelter, and clothing. These come first in any budget.\n\nWants are things you would like to have but can live without — video games, sweets, toys, or the latest trainers.\n\nBefore spending money, ask yourself: "Is this a need or a want?" If it is a want, ask: "Is this more important than my savings goal?" This simple question can help you make smarter choices every day.',
      },
      // Screen 4 — Multiple Choice
      {
        type: 'multiple-choice',
        variants: {
          easy: {
            question: 'Which of these is a need?',
            options: [
              { id: 'a', text: 'A video game' },
              { id: 'b', text: 'Food to eat' },
              { id: 'c', text: 'A stuffed animal' },
            ],
            correctAnswer: 'b',
            explanation: 'Food is something you need to survive. Video games and stuffed animals are fun, but they are wants!',
          },
          medium: {
            question: 'You have £15. A toy costs £15 and you are also saving for a £30 book. What is the trade-off if you buy the toy?',
            options: [
              { id: 'a', text: 'There is no trade-off' },
              { id: 'b', text: 'You delay reaching your savings goal for the book' },
              { id: 'c', text: 'You get the book faster' },
            ],
            correctAnswer: 'b',
            explanation: 'If you spend £15 on the toy, that is £15 that will not go toward your book goal. The trade-off is a longer wait for the book.',
          },
          hard: {
            question: 'What is the opportunity cost of spending £50 on new headphones instead of saving it in an account that earns 5% annual interest?',
            options: [
              { id: 'a', text: 'Nothing, because you enjoyed the headphones' },
              { id: 'b', text: 'The £50 plus the interest it would have earned over time' },
              { id: 'c', text: 'Exactly £5' },
            ],
            correctAnswer: 'b',
            explanation: 'The opportunity cost includes both the £50 and the interest it could have earned. Over time, compound interest makes the real cost of spending even higher.',
          },
        },
      },
      // Screen 5 — Fill in the Blank
      {
        type: 'fill-blank',
        variants: {
          easy: {
            question: 'Things you must have to live, like food and water, are called ___.',
            options: [
              { id: 'a', text: 'wants' },
              { id: 'b', text: 'needs' },
              { id: 'c', text: 'wishes' },
            ],
            correctAnswer: 'b',
            explanation: 'Needs are essentials for survival like food, water, shelter, and clothing.',
          },
          medium: {
            question: 'When you choose one thing over another, what you give up is called a ___.',
            options: [
              { id: 'a', text: 'trade-off' },
              { id: 'b', text: 'bonus' },
              { id: 'c', text: 'reward' },
            ],
            correctAnswer: 'a',
            explanation: 'A trade-off is what you give up when you choose one option instead of another. Every spending decision has a trade-off!',
          },
          hard: {
            question: 'In economics, the value of the next best alternative you give up is called the ___ cost.',
            options: [
              { id: 'a', text: 'sunk' },
              { id: 'b', text: 'opportunity' },
              { id: 'c', text: 'marginal' },
            ],
            correctAnswer: 'b',
            explanation: 'Opportunity cost is the value of what you give up when you make a choice. It is a fundamental concept in economics and personal finance.',
          },
        },
      },
      // Screen 6 — Tap Match
      {
        type: 'tap-match',
        variants: {
          easy: {
            question: 'Match each item to whether it is a need or a want.',
            matchPairs: [
              { left: 'Warm coat', right: 'Need' },
              { left: 'Toy robot', right: 'Want' },
              { left: 'Drinking water', right: 'Need' },
            ],
            correctAnswer: 'all',
            explanation: 'A warm coat and drinking water are needs because you must have them. A toy robot is fun but it is a want.',
          },
          medium: {
            question: 'Match each scenario with its result.',
            matchPairs: [
              { left: 'Spend all your pocket money', right: 'Nothing left to save' },
              { left: 'Save half, spend half', right: 'Balanced approach' },
              { left: 'Save everything', right: 'No fun spending but fast savings' },
              { left: 'Spend on needs first', right: 'Smart budgeting priority' },
            ],
            correctAnswer: 'all',
            explanation: 'Balancing spending and saving is key. Covering needs first and splitting the rest between saving and fun spending is a smart strategy.',
          },
          hard: {
            question: 'Match each financial term with its meaning.',
            matchPairs: [
              { left: 'Opportunity cost', right: 'Value of the alternative you did not choose' },
              { left: 'Trade-off', right: 'Giving up one thing to get another' },
              { left: 'Delayed gratification', right: 'Waiting for a bigger reward later' },
              { left: 'Impulse purchase', right: 'Buying something without planning' },
            ],
            correctAnswer: 'all',
            explanation: 'Understanding these concepts helps you make smarter spending decisions. Delayed gratification — choosing to wait — is one of the most powerful money skills you can build.',
          },
        },
      },
    ],
  },

  // ─── LESSON 4: The Monster Vault Challenge ──────────────────────────
  {
    id: 'saving-budgeting-4',
    trackId: 'saving-budgeting',
    index: 4,
    title: 'The Monster Vault Challenge',
    description: 'Put your saving skills into practice with fun monster-themed strategies and challenges.',
    xpReward: 20,
    screens: [
      // Screen 1 — Content
      {
        type: 'content',
        title: 'Saving Strategies That Work',
        body: 'Now that you know why saving matters, here are some fun strategies to help you save even more:\n\n1. The Monster Coin Method: Put all your loose change into a money monster jar every day. You will be amazed how fast it fills up!\n\n2. The Save-First Rule: Every time you get money, put some in savings before you spend anything. Even 20% is a great start.\n\n3. The 30-Day Wait: When you want to buy something expensive, wait 30 days. If you still want it after a month, go ahead. Often you will realise you did not need it.\n\n4. The Match Game: Ask a parent or guardian if they will match what you save. If you save £5, they add £5 too. That doubles your savings!',
      },
      // Screen 2 — Fill in the Blank
      {
        type: 'fill-blank',
        variants: {
          easy: {
            question: 'The Save-First Rule means you save ___ you spend.',
            options: [
              { id: 'a', text: 'after' },
              { id: 'b', text: 'before' },
              { id: 'c', text: 'instead of' },
            ],
            correctAnswer: 'b',
            explanation: 'The Save-First Rule means you put money into savings before spending on anything else. Pay yourself first!',
          },
          medium: {
            question: 'The 30-Day Wait helps you avoid ___ purchases.',
            options: [
              { id: 'a', text: 'necessary' },
              { id: 'b', text: 'impulse' },
              { id: 'c', text: 'important' },
            ],
            correctAnswer: 'b',
            explanation: 'Waiting 30 days helps you avoid impulse purchases — things you buy on a whim without really thinking about whether you need them.',
          },
          hard: {
            question: 'When an employer matches your pension contributions, it is essentially ___ money.',
            options: [
              { id: 'a', text: 'borrowed' },
              { id: 'b', text: 'taxed' },
              { id: 'c', text: 'free' },
            ],
            correctAnswer: 'c',
            explanation: 'Employer matching is essentially free money. For every pound you save in a pension, your employer adds extra pounds — so not taking advantage of matching means leaving money on the table.',
          },
        },
      },
      // Screen 3 — Content
      {
        type: 'content',
        title: 'The Monster Vault Challenge',
        body: 'Ready for a challenge? Try the Monster Vault Challenge!\n\nWeek 1: Save £1.\nWeek 2: Save £2.\nWeek 3: Save £3.\nKeep adding £1 more each week.\n\nAfter 10 weeks you will have saved £1 + £2 + £3 + £4 + £5 + £6 + £7 + £8 + £9 + £10 = £55!\n\nThat is enough for many cool things. The best part is that you start small so it never feels too hard. By the time you are saving bigger amounts, you are already in the habit.\n\nYou can use a money monster jar, a tin, an envelope, or even ask a parent to help you open a Junior ISA or savings account at a bank.',
      },
      // Screen 4 — Multiple Choice
      {
        type: 'multiple-choice',
        variants: {
          easy: {
            question: 'In the Monster Vault Challenge, how much do you save in Week 3?',
            options: [
              { id: 'a', text: '£1' },
              { id: 'b', text: '£2' },
              { id: 'c', text: '£3' },
            ],
            correctAnswer: 'c',
            explanation: 'In Week 3 you save £3. Each week you save one more pound than the week before!',
          },
          medium: {
            question: 'If you complete the Monster Vault Challenge for 10 weeks, how much will you have saved in total?',
            options: [
              { id: 'a', text: '£45' },
              { id: 'b', text: '£55' },
              { id: 'c', text: '£100' },
            ],
            correctAnswer: 'b',
            explanation: '£1 + £2 + £3 + £4 + £5 + £6 + £7 + £8 + £9 + £10 = £55. The challenge adds up quickly!',
          },
          hard: {
            question: 'If you do the Monster Vault Challenge for a full year (52 weeks), what is the total amount saved?',
            options: [
              { id: 'a', text: '£1,378' },
              { id: 'b', text: '£520' },
              { id: 'c', text: '£2,704' },
            ],
            correctAnswer: 'a',
            explanation: 'The sum of 1 + 2 + 3 + ... + 52 equals (52 x 53) / 2 = £1,378. This formula, n(n+1)/2, is a handy way to calculate the sum of a series!',
          },
        },
      },
      // Screen 5 — True/False
      {
        type: 'true-false',
        variants: {
          easy: {
            question: 'You can save money in a jar at home.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'True! A money monster jar, a tin, or an envelope are all simple ways to start saving at home.',
          },
          medium: {
            question: 'The Monster Coin Method only works if you put in notes, not coins.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'False! The Monster Coin Method is all about collecting coins. Those small amounts of change really add up over time.',
          },
          hard: {
            question: 'A savings account at a bank can earn interest, which means your money grows even without adding more.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'True! Banks pay you interest for keeping your money with them. Over time, compound interest helps your savings grow faster and faster.',
          },
        },
      },
      // Screen 6 — Tap Match
      {
        type: 'tap-match',
        variants: {
          easy: {
            question: 'Match each saving strategy with how it works.',
            matchPairs: [
              { left: 'Monster Coin Method', right: 'Put loose change in a jar every day' },
              { left: 'Save-First Rule', right: 'Save money before you spend' },
              { left: 'Match Game', right: 'A parent adds the same amount you save' },
            ],
            correctAnswer: 'all',
            explanation: 'Each strategy makes saving easier and more fun. Try one this week!',
          },
          medium: {
            question: 'Match each week of the Monster Vault Challenge with the correct amount to save.',
            matchPairs: [
              { left: 'Week 1', right: '£1' },
              { left: 'Week 5', right: '£5' },
              { left: 'Week 10', right: '£10' },
              { left: 'Week 20', right: '£20' },
            ],
            correctAnswer: 'all',
            explanation: 'The challenge is simple: the week number equals the pound amount you save. Week 1 = £1, Week 5 = £5, and so on!',
          },
          hard: {
            question: 'Match each saving tool with its key advantage.',
            matchPairs: [
              { left: 'Money monster jar', right: 'Easy to start, very visual progress' },
              { left: 'Junior ISA', right: 'Tax-free savings designed for under-18s' },
              { left: 'Fixed-rate savings bond', right: 'Higher interest rate for locking money away' },
              { left: 'Standing orders', right: 'Saves consistently without you thinking about it' },
            ],
            correctAnswer: 'all',
            explanation: 'As you grow, your saving tools can grow too — from a money monster jar to Junior ISAs, fixed-rate savings bonds, and standing orders that make saving effortless.',
          },
        },
      },
    ],
  },
];
