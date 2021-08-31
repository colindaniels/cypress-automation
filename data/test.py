import random

import numpy as np
import math


def random_exp(max):
    nums = 1
    for i in range(max):
        if random.random() >= 0.5:
            nums = nums + 1
        else:
            break
    return nums

print(random.randrange(1, len(['345', '34534']) + 1))