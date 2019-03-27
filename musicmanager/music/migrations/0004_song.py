# Generated by Django 2.1.7 on 2019-03-27 17:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0003_auto_20190327_0146'),
    ]

    operations = [
        migrations.CreateModel(
            name='Song',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('album', models.CharField(max_length=100)),
                ('duration', models.TimeField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]