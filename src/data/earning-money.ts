import { Lesson } from '@/types';

export const earningMoneyLessons: Lesson[] = [
  // ────────────────────────────────────────────
  // Lesson 0: Jobs and Careers
  // ────────────────────────────────────────────
  {
    id: 'earning-money-0',
    trackId: 'earning-money',
    index: 0,
    title: 'Jobs and Careers',
    description: 'Discover the many different ways people earn money through jobs and careers.',
    xpReward: 20,
    screens: [
      // Screen 1 - Content
      {
        type: 'content',
        title: 'How Do People Earn Money?',
        body: 'Most people earn money by working at a job. A job is when someone does work and gets paid for it. There are thousands of different jobs in the world!\n\nSome people work with their hands, like builders and chefs. Others work with their minds, like teachers and scientists. Some people work in offices, while others work outside, in hospitals, or even from home.\n\nThe money people earn from their job is called income. People use their income to pay for things they need, like food and a home, and things they want, like toys and holidays. Your Money Monster loves it when you learn how earning works!',
      },
      // Screen 2 - Multiple Choice
      {
        type: 'multiple-choice',
        variants: {
          easy: {
            question: 'What do people get when they do a job?',
            options: [
              { id: 'a', text: 'Money' },
              { id: 'b', text: 'Homework' },
              { id: 'c', text: 'Stickers' },
            ],
            correctAnswer: 'a',
            explanation: 'People get paid money when they work at a job. This money is called their income! Feed your Money Monster by learning how earning works!',
          },
          medium: {
            question: 'What is the money people earn from their job called?',
            options: [
              { id: 'a', text: 'Pocket money' },
              { id: 'b', text: 'Income' },
              { id: 'c', text: 'Savings' },
            ],
            correctAnswer: 'b',
            explanation: 'The money earned from a job is called income. People use their income to pay for needs and wants.',
          },
          hard: {
            question: 'Which of the following best describes the difference between a job and a career?',
            options: [
              { id: 'a', text: 'A career is a long-term path in a field, while a job is a specific position' },
              { id: 'b', text: 'A job always pays more than a career' },
              { id: 'c', text: 'There is no difference between a job and a career' },
            ],
            correctAnswer: 'a',
            explanation: 'A career is a long-term journey in a professional field, built over many years. A job is a specific position you hold at a particular time. Your career might include many different jobs!',
          },
        },
      },
      // Screen 3 - Content
      {
        type: 'content',
        title: 'Types of Jobs',
        body: 'Jobs come in all shapes and sizes! Here are some types:\n\nService jobs: These people help others. Doctors, firefighters, and teachers all have service jobs.\n\nTrade jobs: These people build and fix things. Plumbers, electricians, and carpenters use special skills and tools.\n\nCreative jobs: These people make art, music, or stories. Artists, musicians, and writers have creative jobs.\n\nTechnology jobs: These people work with computers and technology. Programmers and engineers help create apps, websites, and gadgets.\n\nEvery job is important because it helps our community work together! Your monster grows stronger with every pound earned!',
      },
      // Screen 4 - True/False
      {
        type: 'true-false',
        variants: {
          easy: {
            question: 'A teacher is someone who has a job.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'True! A teacher works at a school and gets paid money. Teaching is a very important job!',
          },
          medium: {
            question: 'All jobs require people to work in an office building.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'False! Many people work outside (like farmers), at home (like remote workers), in hospitals (like nurses), or travel for their jobs (like pilots).',
          },
          hard: {
            question: 'A salary and an hourly wage are exactly the same thing.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'False! A salary is a fixed amount paid over a year regardless of hours, while an hourly wage pays a set amount for each hour worked. Both are forms of income, but they work differently.',
          },
        },
      },
      // Screen 5 - Tap Match
      {
        type: 'tap-match',
        variants: {
          easy: {
            question: 'Match each worker to what they do!',
            matchPairs: [
              { left: 'Doctor', right: 'Helps sick people' },
              { left: 'Teacher', right: 'Helps kids learn' },
              { left: 'Chef', right: 'Cooks food' },
            ],
            correctAnswer: '',
            explanation: 'Doctors help sick people get better, teachers help children learn new things, and chefs cook delicious food. Each job helps the community!',
          },
          medium: {
            question: 'Match each job to the place where they usually work!',
            matchPairs: [
              { left: 'Pilot', right: 'Aeroplane' },
              { left: 'Nurse', right: 'Hospital' },
              { left: 'Farmer', right: 'Farm' },
              { left: 'Librarian', right: 'Library' },
            ],
            correctAnswer: '',
            explanation: 'Different jobs have different workplaces. Pilots fly aeroplanes, nurses work in hospitals, farmers work on farms, and librarians manage libraries.',
          },
          hard: {
            question: 'Match each type of income to its description.',
            matchPairs: [
              { left: 'Salary', right: 'Fixed yearly pay' },
              { left: 'Hourly wage', right: 'Paid per hour worked' },
              { left: 'Commission', right: 'Percentage of sales' },
              { left: 'Tips', right: 'Extra from customers' },
            ],
            correctAnswer: '',
            explanation: 'There are many ways to earn income. Salaries are fixed annual amounts, hourly wages pay per hour, commissions are based on sales performance, and tips are extra payments from satisfied customers.',
          },
        },
      },
      // Screen 6 - Fill in the Blank
      {
        type: 'fill-blank',
        variants: {
          easy: {
            question: 'A person who puts out fires is called a ___.',
            options: [
              { id: 'a', text: 'firefighter' },
              { id: 'b', text: 'teacher' },
              { id: 'c', text: 'doctor' },
            ],
            correctAnswer: 'a',
            explanation: 'A firefighter is a person whose job is to put out fires and help keep people safe!',
          },
          medium: {
            question: 'The money that people earn from working at their job is called their ___.',
            options: [
              { id: 'a', text: 'pocket money' },
              { id: 'b', text: 'income' },
              { id: 'c', text: 'gift' },
            ],
            correctAnswer: 'b',
            explanation: 'Income is the money earned from working. It can come from a salary, hourly wages, or other forms of payment.',
          },
          hard: {
            question: 'When a worker earns a percentage of each sale they make, this type of pay is called a ___.',
            options: [
              { id: 'a', text: 'bonus' },
              { id: 'b', text: 'salary' },
              { id: 'c', text: 'commission' },
            ],
            correctAnswer: 'c',
            explanation: 'A commission is a payment based on a percentage of sales. For example, an estate agent might earn 1.5% of a home\'s sale price as their commission.',
          },
        },
      },
    ],
  },

  // ────────────────────────────────────────────
  // Lesson 1: Entrepreneurship for Kids
  // ────────────────────────────────────────────
  {
    id: 'earning-money-1',
    trackId: 'earning-money',
    index: 1,
    title: 'Entrepreneurship for Kids',
    description: 'Learn how kids can start their own small businesses and become young entrepreneurs.',
    xpReward: 20,
    screens: [
      // Screen 1 - Content
      {
        type: 'content',
        title: 'What Is an Entrepreneur?',
        body: 'An entrepreneur is someone who starts their own business. Instead of working for someone else, entrepreneurs come up with their own ideas and build something new!\n\nEven kids can be entrepreneurs. Have you ever run a bake sale or a car boot sale stand? That is a small business! The kid who runs it is an entrepreneur. They buy the ingredients or supplies, make or find great items, and sell them to earn money.\n\nEntrepreneurs need to think about what people want to buy, how much to charge, and how to tell people about their product. It takes creativity, hard work, and courage to start a business! Feed your Money Monster by earning!',
      },
      // Screen 2 - True/False
      {
        type: 'true-false',
        variants: {
          easy: {
            question: 'Kids can start their own small businesses.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'True! Kids can start small businesses like bake sales, dog walking, or selling crafts. Being a kid entrepreneur is a great way to learn about money!',
          },
          medium: {
            question: 'An entrepreneur always works for someone else.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'False! An entrepreneur starts and runs their own business. They are their own boss, which means they make the decisions but also take on the risks.',
          },
          hard: {
            question: 'Revenue and profit mean the same thing in a business.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'False! Revenue is the total money a business brings in from sales. Profit is what is left after you subtract all costs and expenses. A bake sale might have £20 in revenue but only £12 in profit after paying £8 for ingredients.',
          },
        },
      },
      // Screen 3 - Content
      {
        type: 'content',
        title: 'Starting Your Own Business',
        body: 'Want to start a business? Here are the steps:\n\n1. Find an idea: What can you make or do that people would pay for? Bake sales, dog walking, car washing, or handmade crafts are great ideas!\n\n2. Figure out costs: How much money do you need to get started? This is called your startup cost. For a bake sale, you need flour, sugar, butter, and bags or boxes to wrap your treats.\n\n3. Set a price: Your price should be higher than what it costs you to make each item. The difference is your profit!\n\n4. Tell people: Let your neighbours and friends know about your business. This is called marketing.\n\n5. Keep track: Write down how much you spend and how much you earn. This helps you know if your business is making a profit! Your monster grows stronger with every pound earned!',
      },
      // Screen 4 - Multiple Choice
      {
        type: 'multiple-choice',
        variants: {
          easy: {
            question: 'What is a bake sale an example of?',
            options: [
              { id: 'a', text: 'A game' },
              { id: 'b', text: 'A small business' },
              { id: 'c', text: 'A school project' },
            ],
            correctAnswer: 'b',
            explanation: 'A bake sale is a small business! You buy ingredients, make tasty treats, and sell them to earn money. That makes you an entrepreneur!',
          },
          medium: {
            question: 'If you spend £5 on ingredients and sell your baked goods for £15, how much profit do you make?',
            options: [
              { id: 'a', text: '£15' },
              { id: 'b', text: '£5' },
              { id: 'c', text: '£10' },
            ],
            correctAnswer: 'c',
            explanation: 'Profit equals revenue minus costs. You earned £15 and spent £5, so your profit is £15 - £5 = £10!',
          },
          hard: {
            question: 'Which of the following is an example of a variable cost for a bake sale?',
            options: [
              { id: 'a', text: 'The table you use every day' },
              { id: 'b', text: 'The flour and sugar you need to buy for each batch' },
              { id: 'c', text: 'The sign you made once for advertising' },
            ],
            correctAnswer: 'b',
            explanation: 'Variable costs change based on how much you produce. Flour and sugar must be purchased for each new batch, so the cost goes up as you bake more. The table and sign are fixed costs because you pay for them once.',
          },
        },
      },
      // Screen 5 - Fill in the Blank
      {
        type: 'fill-blank',
        variants: {
          easy: {
            question: 'A person who starts a business is called an ___.',
            options: [
              { id: 'a', text: 'entrepreneur' },
              { id: 'b', text: 'teacher' },
              { id: 'c', text: 'customer' },
            ],
            correctAnswer: 'a',
            explanation: 'An entrepreneur is someone who starts and runs their own business. They come up with ideas and work hard to make them happen!',
          },
          medium: {
            question: 'The money left over after paying all your costs is called your ___.',
            options: [
              { id: 'a', text: 'revenue' },
              { id: 'b', text: 'expense' },
              { id: 'c', text: 'profit' },
            ],
            correctAnswer: 'c',
            explanation: 'Profit is the money you keep after paying for all your expenses and costs. It is calculated as revenue minus costs.',
          },
          hard: {
            question: 'The money needed to start a new business before it earns any income is called ___ capital.',
            options: [
              { id: 'a', text: 'startup' },
              { id: 'b', text: 'savings' },
              { id: 'c', text: 'borrowed' },
            ],
            correctAnswer: 'a',
            explanation: 'Startup capital is the initial money invested to get a new business off the ground. It covers the costs of ingredients, equipment, and anything else needed before the first sale.',
          },
        },
      },
      // Screen 6 - Tap Match
      {
        type: 'tap-match',
        variants: {
          easy: {
            question: 'Match each kid business to what it sells or does!',
            matchPairs: [
              { left: 'Bake sale', right: 'Sells cakes and treats' },
              { left: 'Dog walking', right: 'Walks pets' },
              { left: 'Craft stall', right: 'Sells handmade items' },
            ],
            correctAnswer: '',
            explanation: 'Kids can earn money in many ways! Bake sales sell delicious treats, dog walkers help pet owners, and craft stalls offer handmade items like bracelets or paintings.',
          },
          medium: {
            question: 'Match each business term to its meaning!',
            matchPairs: [
              { left: 'Revenue', right: 'Total money from sales' },
              { left: 'Cost', right: 'Money spent on supplies' },
              { left: 'Profit', right: 'Revenue minus costs' },
              { left: 'Customer', right: 'Person who buys' },
            ],
            correctAnswer: '',
            explanation: 'Revenue is all the money that comes in from sales. Cost is what you spend to make your product. Profit is what remains after costs. Customers are the people who buy from you!',
          },
          hard: {
            question: 'Match each business concept to the correct example.',
            matchPairs: [
              { left: 'Fixed cost', right: 'Buying a table once' },
              { left: 'Variable cost', right: 'Flour per batch' },
              { left: 'Marketing', right: 'Making flyers' },
              { left: 'Pricing', right: 'Charging £2 per cake' },
            ],
            correctAnswer: '',
            explanation: 'Fixed costs are one-time or recurring expenses that do not change with production. Variable costs change with how much you produce. Marketing spreads the word about your business, and pricing determines how much you charge.',
          },
        },
      },
    ],
  },

  // ────────────────────────────────────────────
  // Lesson 2: Pocket Money and Chores
  // ────────────────────────────────────────────
  {
    id: 'earning-money-2',
    trackId: 'earning-money',
    index: 2,
    title: 'Pocket Money and Chores',
    description: 'Learn how doing chores and earning pocket money teaches responsibility with money.',
    xpReward: 20,
    screens: [
      // Screen 1 - Content
      {
        type: 'content',
        title: 'What Is Pocket Money?',
        body: 'Pocket money is money that your parents or guardians give you on a regular schedule, like every week or every month. It is one of the first ways many kids earn their own money!\n\nSome families give pocket money just for being part of the family. Others tie pocket money to completing chores around the house. Either way, pocket money is a great tool for learning how to manage money.\n\nWhen you receive pocket money, you get to practise real money skills: deciding how much to save, how much to spend, and maybe even how much to share with others. These are the same skills adults use every day! Your Money Monster loves watching you learn!',
      },
      // Screen 2 - Multiple Choice
      {
        type: 'multiple-choice',
        variants: {
          easy: {
            question: 'What is pocket money?',
            options: [
              { id: 'a', text: 'Money you find on the ground' },
              { id: 'b', text: 'Money your parents give you regularly' },
              { id: 'c', text: 'Money from a birthday card' },
            ],
            correctAnswer: 'b',
            explanation: 'Pocket money is money that your parents or guardians give you on a regular schedule, like weekly or monthly. It helps you learn about managing money!',
          },
          medium: {
            question: 'Why is receiving pocket money helpful for kids?',
            options: [
              { id: 'a', text: 'It lets them buy anything they want' },
              { id: 'b', text: 'It teaches them to manage money by saving, spending, and sharing' },
              { id: 'c', text: 'It means they never have to do chores' },
            ],
            correctAnswer: 'b',
            explanation: 'Pocket money teaches kids real money skills. When you have your own money, you learn to make choices about saving, spending, and sharing, which are skills you will use your whole life!',
          },
          hard: {
            question: 'Which approach to pocket money best teaches the connection between work and income?',
            options: [
              { id: 'a', text: 'Giving a fixed amount with no requirements' },
              { id: 'b', text: 'Paying only for extra chores beyond basic responsibilities' },
              { id: 'c', text: 'Tying all pocket money to completing assigned chores each week' },
            ],
            correctAnswer: 'c',
            explanation: 'While all approaches have value, tying pocket money directly to completed chores most closely mirrors the real-world relationship between work and earning income. It teaches that money is earned through effort and responsibility.',
          },
        },
      },
      // Screen 3 - Content
      {
        type: 'content',
        title: 'Chores That Earn Money',
        body: 'Chores are jobs you do around the house. They teach responsibility and can help you earn pocket money. Here are some common chores:\n\nEasy chores: Making your bed, putting away toys, feeding a pet, and setting the table.\n\nMedium chores: Taking out the rubbish, loading the dishwasher, sweeping the floor, and folding laundry.\n\nBigger chores: Mowing the lawn, washing the car, cleaning the bathroom, and tidying the garage.\n\nThe harder the chore, the more it might be worth! Some families create a chore chart that shows which chores need to be done each day and how much each one is worth in pence or pounds. Finishing all your chores on time shows that you are responsible and dependable. Your monster grows stronger with every pound earned!',
      },
      // Screen 4 - Tap Match
      {
        type: 'tap-match',
        variants: {
          easy: {
            question: 'Match each chore to the right room!',
            matchPairs: [
              { left: 'Wash dishes', right: 'Kitchen' },
              { left: 'Make the bed', right: 'Bedroom' },
              { left: 'Rake leaves', right: 'Garden' },
            ],
            correctAnswer: '',
            explanation: 'Chores happen all around the house! Dishes get washed in the kitchen, beds get made in the bedroom, and leaves get raked in the garden.',
          },
          medium: {
            question: 'Match each chore to how often it is usually done!',
            matchPairs: [
              { left: 'Make your bed', right: 'Every day' },
              { left: 'Take out rubbish', right: 'A few times a week' },
              { left: 'Mow the lawn', right: 'Once a week' },
              { left: 'Clean the garage', right: 'Once a month' },
            ],
            correctAnswer: '',
            explanation: 'Different chores happen at different frequencies. Daily chores like making your bed are quick habits, while bigger tasks like cleaning the garage only need to be done once in a while.',
          },
          hard: {
            question: 'Match each money management strategy to its description.',
            matchPairs: [
              { left: 'Save jar', right: 'Money set aside for the future' },
              { left: 'Spend jar', right: 'Money for things you want now' },
              { left: 'Share jar', right: 'Money to donate or give as gifts' },
              { left: 'Invest jar', right: 'Money to grow over time' },
            ],
            correctAnswer: '',
            explanation: 'The jar system is a great way to manage pocket money. By dividing money into save, spend, share, and invest categories, you build balanced financial habits from an early age.',
          },
        },
      },
      // Screen 5 - True/False
      {
        type: 'true-false',
        variants: {
          easy: {
            question: 'Making your bed is a chore you can do at home.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'True! Making your bed is a simple daily chore. It is a great way to start being responsible and might be part of earning pocket money!',
          },
          medium: {
            question: 'You should spend your entire pocket money as soon as you get it.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'False! It is smart to divide your pocket money into parts: some for saving, some for spending, and some for sharing. This way you can buy things now and still have money for the future.',
          },
          hard: {
            question: 'Consistently completing chores on time can help develop the discipline needed for success in future careers.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'True! The habits you build doing chores, such as time management, responsibility, and following through on commitments, are the same skills employers value in the workplace. Starting early gives you a real advantage.',
          },
        },
      },
      // Screen 6 - Fill in the Blank
      {
        type: 'fill-blank',
        variants: {
          easy: {
            question: 'Jobs you do around the house are called ___.',
            options: [
              { id: 'a', text: 'chores' },
              { id: 'b', text: 'games' },
              { id: 'c', text: 'snacks' },
            ],
            correctAnswer: 'a',
            explanation: 'Chores are tasks or jobs you do around the house, like making your bed, feeding pets, or helping with dishes!',
          },
          medium: {
            question: 'A ___ chart helps families keep track of which chores need to be done each day.',
            options: [
              { id: 'a', text: 'homework' },
              { id: 'b', text: 'chore' },
              { id: 'c', text: 'game' },
            ],
            correctAnswer: 'b',
            explanation: 'A chore chart lists all the tasks that need to be done and who is responsible for each one. It helps everyone in the family stay organised and accountable.',
          },
          hard: {
            question: 'Dividing your pocket money into categories like save, spend, and share is an example of making a personal ___.',
            options: [
              { id: 'a', text: 'budget' },
              { id: 'b', text: 'receipt' },
              { id: 'c', text: 'loan' },
            ],
            correctAnswer: 'a',
            explanation: 'A budget is a plan for how to use your money. By splitting your pocket money into categories, you are creating a simple budget that helps you meet your saving goals while still enjoying some spending.',
          },
        },
      },
    ],
  },
];
