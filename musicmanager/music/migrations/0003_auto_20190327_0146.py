# Generated by Django 2.1.7 on 2019-03-27 01:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0002_auto_20190326_2002'),
    ]

    operations = [
        migrations.AlterField(
            model_name='album',
            name='published_at',
            field=models.DateTimeField(),
        ),
    ]
