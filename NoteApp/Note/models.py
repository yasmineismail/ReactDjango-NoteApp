from django.db import models

class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    #auto_now means that every single time the save method is run on this method so every time we save a note 
    #it's take a timestamp of when we saved that note and added it  or updatet it in the database
    created = models.DateTimeField(auto_now_add=True)
    #the difference auto_now_add only takes a timestamp on the creation of that model 

    def __str__(self):
        return self.body[0:50]
        #we only want to get the first 50 characters and trim that down
