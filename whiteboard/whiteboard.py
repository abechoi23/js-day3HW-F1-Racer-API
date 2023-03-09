def getBandName(noun):
    if noun[0] == noun[-1]:
        return f'{noun.title()}{noun[1:]}'
    else:
        return f'The {noun.title()}'
    

print(getBandName('dolphin'))
print(getBandName('alaska'))