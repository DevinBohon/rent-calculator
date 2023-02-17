//this is to calculate to see if an hourly rate is able afford an apartment.
//n is the hourly rate
//2080 is the total number of hours worked a year if you work a 40 hour work week
//divided by 12 for the months of the year
// divided by three due to appartment having a policy of tenants being required 3* rent in a  month for them to even rent out to the tenant
function rent (n) {
    num = ((n * 2080)/12)/3
    
    return num
}