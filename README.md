# Traveling Salesperson Problem -- Empirical Analysis

For this exercise, you'll need to take the code from the TSP Held-Karp and TSP
Local Search exercises. This can be your own implementation or somebody else's.
You will now do an empirical analysis of the implementations, comparing their
performance. Both the Held-Karp and the Local Search algorithms solve the same
problem, but they do so in completely different ways. This results in different
solutions, and in different times required to get to the solution.

Investigate the implementations' empirical time complexity, i.e. how the runtime
increases as the input size increases. *Measure* this time by running the code
instead of reasoning from the asymptotic complexity (this is the empirical
part). Create inputs of different sizes and plot how the runtime scales (input
size on the $x$ axis, time on the $y$ axis). Your largest input should have a
runtime of *at least* an hour. The input size that gets you to an hour will
probably not be the same for the Held-Karp and Local Search implementations.

In addition to the measured runtime, plot the tour lengths obtained by both
implementations on the same input distance matrices. The length of the tour that
Held-Karp found should always be less than or equal to the tour length that
Local Search found. Why is this?

Add the code to run your experiments, graphs, and an explanation of what you did
to this markdown file.


The Held-Karp algorithm finds the best path so it's going to guarantee the the smallest length. The Local Search algorithm is not looking globaly at the paths so it's only finding the best path in a smaller picture. The Local Search found the 14th city in about 85 mins. 



I've been running these for about 5 hours after adding the bitmasking and the Held-Karp hasn't found the path for the input size of 21 yet. Before the bitmasking was added I ran both overnight for about 12 hours and they we're in the saame positions. I don't know what else to do. I know it's going to be an insane growth for each larger input but this is ridiculously long. I need these to stop running so I can work on my Wildcard project this weekend.

You can see in the graphs that both algorithms had the same travel distances for each increment of input up to the 14th. The local search  run time starts to make a substantial increase at the 13th input. The Held-Karp tsp run time continued to grow around 2.5 times each increment in the input till the 20th input. This is where the time started to increase dramatically. I ran the Held-Karp and Local search overnight for 12 hours. Neither of them went past the recorded times in the vscode screen shots. The Held-Karp made it through the 20th input, the Local Search made it through the 14th input, all within a 12 hour period. Both had the same matrix build function and loop. The only difference was the upper limit given to the Held-Karp was 50 input and the upper limit for the Local Search was 21. I did this because I wanted to meet the 1 hour benchmark and figured the Held-Karp was going to go farther, faster. 

![graph](https://github.com/user-attachments/assets/e4f09ee4-64de-4618-a08e-bf3769bd768a)
![PathLength](https://github.com/user-attachments/assets/fa954423-85e2-479a-b01d-abb9e62979d6)
![Screenshot (20)](https://github.com/user-attachments/assets/637cb1f5-2643-42a8-96fd-3c2f99d46913)


https://www.geeksforgeeks.org/what-is-bitmasking-in-javascript/
https://medium.com/@yashwanthnandam/traveling-salesman-problem-a-speed-battle-between-python-and-go-93ea447669d6

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
