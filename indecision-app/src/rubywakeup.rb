def reverse_word(reversed)
  split_string = reversed.split("")
  reversed_word = []
  split_string.size.times { reversed_word << split_string.pop }
  reversed_word.join
end

reverse_word("hello")

# take in a string and reverse the input
# data type is string and array
# 