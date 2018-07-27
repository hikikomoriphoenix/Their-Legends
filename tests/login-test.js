// Test if the regex in validateLogin works
describe('Login Validation', function() {
    var username;
    var password;
    var assertValidateLogin = function(expected) {
        assert.equal(validateLogin(username, password), expected);
    }

    it('should return true with valid input', function() {
        username = "$_I-Am-@.Hero*!";
        password = "10=/?><%&#~-_";        
        assertValidateLogin(true);
    });

    it('should return false when username exceed max length', function() { 
        username = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        password = "123456";
        assertValidateLogin(false);
    });

    it('should return false when password exceed max length', function() {
        username = "a";
        password = "126912301740187419024871094710491872401974";
        assertValidateLogin(false);
    });

    it('should return false if password is less than min length', function() {
        username = "a";
        password = "123";
        assertValidateLogin(false);
    });

    it('should return false if username contains invalid characters', function() {
        username = "I am a hero";
        password = "123456";
        assertValidateLogin(false);
        username = "~"; assertValidateLogin(false);
        username = "#"; assertValidateLogin(false);
        username = "%"; assertValidateLogin(false);
        username = "^"; assertValidateLogin(false);
        username = "&"; assertValidateLogin(false);
        username = "("; assertValidateLogin(false);
        username = ")"; assertValidateLogin(false);
        username = "+"; assertValidateLogin(false);
        username = "="; assertValidateLogin(false);
        username = "<"; assertValidateLogin(false);
        username = ">"; assertValidateLogin(false);
        username = "?"; assertValidateLogin(false);
        username = "'"; assertValidateLogin(false);
    });

    it('should return false if password contains space', function() {
        username = "a";
        password = "123 456";
        assertValidateLogin(false);
        password = " 123456";
        assertValidateLogin(false);
        password = "123456 ";
        assertValidateLogin(false);
    });
});