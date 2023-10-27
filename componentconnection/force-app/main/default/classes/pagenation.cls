public with sharing class pagenation {
    public pagenation() { }
    @AuraEnabled(cacheable=true)

    public static List<Account> getAcc(){
        return [select Name,Phone from Account];
    }
}