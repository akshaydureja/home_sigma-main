# Generated by Django 5.0.6 on 2024-06-15 07:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0013_property_label_alter_property_community_image_url_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='leads',
            name='interests',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
